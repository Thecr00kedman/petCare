"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AppointmentSchema from "@/schemas/AppointmentSchema";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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

const BookAppointment = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

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
                date: date.getDate().toString().padStart(2, "0"), // "05"
                month: date.toLocaleDateString("en-US", { month: "short" }), // "Feb"
                fullDate: date.toISOString().split("T")[0], // "YYYY-MM-DD"
            };
        });
    };

    const days = generateNext7Days();

    const timeSlots = ["7:30 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:30 AM", "11:30 AM"];

    const onSubmit = (data) => {
        console.log("Selected Date:", selectedDate);
        console.log("Selected Time:", selectedTime);
        console.log("Form Data:", data);
    };

    return (
        <div className="flex flex-col lg:flex-row gap-4 px-4 py-6 w-11/12 mx-auto my-4">
            {/* Date & Time Selection */}
            <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-lg p-6 my-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-900">What time works best for a quick call?</h2>
                    <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-full">
                        <X className="h-5 w-5 text-gray-500" />
                    </Button>
                </div>
                
                {/* Date Selection */}
                <div className="bg-gray-50 rounded-lg p-4 mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <Button variant="ghost" size="icon" className="text-gray-500">
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <div className="grid grid-cols-7 gap-4 text-center flex-1">
                            {days.map((item) => (
                                <button
                                    key={item.fullDate}
                                    onClick={() => setSelectedDate(item.fullDate)}
                                    className={`w-full rounded-lg py-4 ${
                                        selectedDate === item.fullDate ? "bg-[#5271ff] text-white" : "hover:bg-gray-100"
                                    }`}
                                >
                                    <div className="text-sm text-gray-600 mb-1">{item.day}</div>
                                    <div className="text-lg font-semibold">{item.date}</div>
                                    <div className="text-sm">{item.month}</div>
                                </button>
                            ))}
                        </div>
                        <Button variant="ghost" size="icon" className="text-gray-500">
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* Time Selection */}
                <h3 className="text-xl font-semibold mb-4">Select a time slot</h3>
                <div className="grid grid-cols-3 gap-4">
                    {timeSlots.map((time) => (
                        <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-3 px-4 rounded-lg border border-violet-200 text-[#5271ff] hover:bg-violet-50 transition-colors ${
                                selectedTime === time ? "bg-[#5271ff] text-white" : ""
                            }`}
                        >
                            {time}
                        </button>
                    ))}
                </div>
            </div>

            {/* Form */}
            <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-lg p-6 my-8">
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full max-w-xl mx-auto">
        
        {/* Name Field */}
        <FormField control={form.control} name="name" render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter your name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        {/* Email Field */}
        <FormField control={form.control} name="email" render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="Enter your email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        {/* Phone Field */}
        <FormField control={form.control} name="phone" render={({ field }) => (
          <FormItem>
            <FormLabel>Phone</FormLabel>
            <FormControl>
              <Input type="tel" placeholder="Enter your phone number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        {/* Type of Consultation Field */}
        <FormField control={form.control} name="typeOfConsultation" render={({ field }) => (
          <FormItem>
            <FormLabel>Type of Consultation</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="General Checkup">General Checkup</SelectItem>
                  <SelectItem value="Emergency">Emergency</SelectItem>
                  <SelectItem value="Vaccination">Vaccination</SelectItem>
                  <SelectItem value="Grooming">Grooming</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        {/* Description Field */}
        <FormField control={form.control} name="description" render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea placeholder="Describe your pet's issue" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        {/* Submit Button */}
        <Button type="submit" className="w-full bg-[#5271ff]">Submit</Button>
      </form>
    </Form>
            </div>
        </div>
    );
};

export default BookAppointment;
