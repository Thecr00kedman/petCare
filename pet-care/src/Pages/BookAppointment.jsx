"use client";

import { useMemo, useState,useEffect, useContext } from "react";
import { ChevronLeft, ChevronRight, Cookie, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AppointmentSchema from "@/schemas/AppointmentSchema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation, useNavigate } from "react-router-dom";
import useGet from "../customHooks/useGet";
import { AuthContext } from "../context/AuthProvider";
import usePost from "../customHooks/usePost";
import { toast } from "react-toastify";
import { format, addMinutes   } from "date-fns";

const BookAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [slots,setSlots]=useState([]);
  const [availableSlots,setAvailableSlots]=useState([]);
  const[selectedSlot,setSelectedSlot]=useState()
  const [selectedDay,setSelectedDay]=useState(null)
  const location = useLocation();

  
  const today = new Date();
  const date = today.toISOString().split("T")[0]; 
  const day = today.toLocaleDateString("en-US", { weekday: "long" });
  
  console.log(date,day, "linee 29");
  let istTime = new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata",hour12: true,
    hour: "2-digit",
    minute: "2-digit", }).toLowerCase();
  console.log(istTime,'line 45');
  
  const {user,IsLoggedIn}=useContext(AuthContext)
  
  const queryParams = new URLSearchParams(location.search);
  const clinicId = queryParams.get("clinicId");
  const dentistId = queryParams.get("dentistId");

  const URL = import.meta.env.VITE_BACKEND_URL;
  const fetchUrl = useMemo(() => {
    if (selectedDate && selectedDay) {
      return `${URL}/user/get-dentist-available-timing?clinicId=${clinicId}&dentistId=${dentistId}&day=${selectedDay}&date=${selectedDate}`;
      
    }
    setSelectedDay(day)
    setSelectedDate(date)
    return null;
  }, [selectedDate, selectedDay, clinicId, dentistId]);
  
  const{postData}=usePost(`${URL}/user/book-appointment`)
  
  const { data } = useGet(fetchUrl);
  let filteredSlots;
  useEffect(() => {
    if(data?.data?.availableSlots){
      filteredSlots= data?.data?.availableSlots?.filter(slot=>{
         return slot?.slotId?.startTime>istTime
       })

       setAvailableSlots(filteredSlots)
     }
  }, [data]);
  console.log(data, 'line 75')
  console.log("Available Slots:",availableSlots)
  const form = useForm({
    resolver: zodResolver(AppointmentSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      typeOfConsultation: "",
      description: "",
    },
  });
  

  const generateNext7Days = () => {
    const today = new Date();
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(today.getDate() + i);
      return {
        day: date.toLocaleDateString("en-US", { weekday: "short" }), // "Mon"
        longDay: date.toLocaleDateString("en-US", { weekday: "long" }), 
        date: date.getDate().toString().padStart(2, "0"), // "05"
        month: date.toLocaleDateString("en-US", { month: "short" }), // "Feb"
        fullDate: date.toISOString().split("T")[0], // "YYYY-MM-DD"
      };
    });
  };
 
  const convertToMinutes = (time) => {
    let [hour, minutePart] = time.split(":");
    let minutes = parseInt(minutePart.slice(0, -2)); // Extract minutes
    let period = minutePart.slice(-2); // Extract AM/PM
  
    hour = parseInt(hour);
  
    if (period === "pm" && hour !== 12) hour += 12; // Convert PM hours
    if (period === "am" && hour === 12) hour = 0; // Convert 12 AM to 0
  
    return hour * 60 + minutes; // Total minutes from midnight
  };
  const filteredAvailableSlots = useMemo(() => {
    if (!data?.data?.availableSlots) return [];
    
    if (selectedDate === date) {
        // If the selected date is today, filter out past slots
        return data?.data?.availableSlots.filter((slot) => {
            if (!slot?.slotId?.startTime) return false;
            const slotTime = convertToMinutes(slot.slotId.startTime);
            const currentTime = convertToMinutes(istTime);
            return slotTime > currentTime;
        });
    } 
    
    // If selected date is NOT today, return all available slots
    return data?.data?.availableSlots;
    
}, [availableSlots, selectedDate, date, istTime]);
;
  // ✅ Ensure dependencies are correct
  
  console.log(filteredAvailableSlots,'line 135')
  const days = generateNext7Days();
  const handleSlotTime=(date,longDay,slotId)=>{
   setSelectedDate(date)
   setSelectedDay(longDay)
   setSelectedSlot(slotId)
  //  console.log(slotId)
}
// console.log(selectedDate,selectedDay,'line number 76')
 const navigate=useNavigate()
  const onSubmit = async(data) => {
    console.log("Selected Date:", selectedDate);
    console.log("Selected Time line 111:", selectedTime,);
    
    console.log("Form Data:", data);
    const body={
      doctorsId:dentistId,
      patientId:user?.userId,
      clinicId,
      timing:{
        day:selectedDay,
        date:selectedDate,
      },
      mobile:data?.phone,
      email:data?.email,
      paymentStatus:"paid",
      fullName:data?.name,
      dentalIssue:data?.typeOfConsultation,
      slotId:selectedTime,
      patientRemarks:data?.description
    }
    if(!IsLoggedIn || user===undefined){
      toast.error("please login to book an appointment")
    navigate('/login')
    }
    const response=await postData(body)
    if(response){
      console.log(response,'lin 127')
      navigate('/appointments')
    }
    
    
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 px-4 py-6 w-11/12 mx-auto my-4">
      {/* Date & Time Selection */}
      <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-8 my-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            What time works best for a quick call?
          </h2>
        </div>

        {/* Date Selection */}
        <div className="bg-gray-50 rounded-lg p-4 mb-8">
          <div className="flex justify-between items-center mb-4">
            {/* <Button variant="ghost" size="icon" className="text-gray-500">
              <ChevronLeft className="h-5 w-5" />
            </Button> */}
            <div className="grid grid-cols-3 md:grid-cols-7 lg:grid-cols-7 gap-4 text-center flex-1">
              {days.map((item) => (
                <button
                  key={item.fullDate}
                  onClick={()=>handleSlotTime(item?.fullDate,item?.longDay,item?._id)}
                  className={`w-full rounded-lg py-4 ${
                    selectedDate === item.fullDate
                      ? "bg-[#5271ff] text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <div className="text-sm mb-1">{item.day}</div>
                  <div className="text-lg font-semibold">{item.date}</div>
                  <div className="text-sm">{item.month}</div>
                </button>
              ))}
            </div>
            {/* <Button variant="ghost" size="icon" className="text-gray-500">
              <ChevronRight className="h-5 w-5" />
            </Button> */}
          </div>
        </div>

        {/* Time Selection */}
        <h3 className="text-xl font-semibold mb-4">Select a time slot</h3>
       {filteredAvailableSlots?.length===0?(
        <div className="flex flex-row gap-4 items-center">
          No Slots Available
        </div>
       ): (<div className="grid grid-cols-3 gap-4">
          {filteredAvailableSlots?.map((time,index) => (
            <button
              key={index}
              onClick={() => setSelectedTime(time?.slotId?._id)}
              className={`py-3 px-4 rounded-lg border border-violet-200 text-[#5271ff] hover:bg-[#3549a1] hover:text-white transition-colors ${
                selectedTime === time?.slotId?._id ? "bg-[#5271ff] text-white" : ""
              }`}
            >
              {time?.slotId?.startTime||"N/a"}
            </button>
          ))}
        </div>)}
      </div>

      {/* Form */}
      <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-lg p-6 my-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 w-full max-w-xl mx-auto"
          >
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Field */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Type of Consultation Field */}
            <FormField
              control={form.control}
              name="typeOfConsultation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type of Consultation</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="General Checkup">
                          General Checkup
                        </SelectItem>
                        <SelectItem value="Emergency">Emergency</SelectItem>
                        <SelectItem value="Vaccination">Vaccination</SelectItem>
                        <SelectItem value="Grooming">Grooming</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description Field */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your pet's issue"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-[#5271ff]">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default BookAppointment;
