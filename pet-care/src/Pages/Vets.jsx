import {useState,React} from "react";
import { veterinaryDetails } from "../assets/data/data";
import VetBanner from "../assets/banner2.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

const Vets = () => {
  const[filters,setFilters]=useState({
    gender:'',
    rating:"",
    location:"",
    specialty:"",
    fee:""
  })
  const[search,setSearch]=useState({
  })
  const handSearchChange=(e)=>{
    setSearch((prev)=>({
      ...prev,
      [e?.target?.name]:e?.target?.value
    }))
  }
  console.log(search, 'this is search')
  const handleChange = (field,value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    
    }));
    console.log("Updated Selection:", setFilters);
  };
  console.log(filters,'these are selected filters')
  return (
    <div>
{/* <div className="w-full flex flex-row justify-between">
      <div className="w-7/12 h-full">
        <div className="text-5xl font-bold">
          We Care About <br />
          Your Pet
        </div>
      </div>
      <div className="w-5/12"><img className='w-full h-full object-contain'src={VetBanner} alt="banner" /></div>
      </div> */}

    <div className="my-24">
      
      <div
        className="w-3/5 mx-auto shadow-sm my-8"
      >
        <div className="flex flex-row">
          <select
            className="w-3/12 border-r-2 text-center border-blue-200"
            name="city"
            id="city"
            onChange={(e)=>handSearchChange(e)}
          >
            <option value="lucknow">Lucknow</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
          </select>
          <input onChange={(e)=>handSearchChange(e)}className="w-9/12 h-12" type="search" name="search" />
        </div>
      </div>
      <div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 p-4 bg-white items-center w-11/12 mx-auto my-4 gap-2">
          <div>
            <Select onValueChange={(value)=>handleChange('gender',value)} className="w-full">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">male</SelectItem>
                <SelectItem value="male">female</SelectItem>
                <SelectItem value="male">others</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select onValueChange={(value)=>handleChange('rating',value)} className="w-full">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="ratings" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select onValueChange={(value)=>handleChange('location',value)} className="w-full focus:none">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lucknow">Lucknow</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="kolkata">Kolkata</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select onValueChange={(value)=>handleChange('specialty',value)} className="w-full">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="surgeon">Surgeon</SelectItem>
                <SelectItem value="orthopedics">Orthopedics</SelectItem>
                <SelectItem value="dentist">Dentist</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select onValueChange={(value)=>handleChange('fee',value)} className="w-full">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="fee" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">0-500</SelectItem>
                <SelectItem value="dark">500-1000</SelectItem>
                <SelectItem value="system">1000-1500</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid bg-white px-4 py-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 w-11/12 mx-auto my-0">
          {veterinaryDetails?.map((item, index) => (
            <div
              className="flex flex-row gap-4 border-b-2 border-black"
              key={index}
            >
              <div className="h-48 w-2/12">
                <img
                  className="h-full w-full object-contain"
                  src={item?.photo}
                  alt="photo"
                />
              </div>
              <div className="w-7/12 flex flex-col gap-2">
                {/* <div className="text-xl font-semibold">{item?.name}</div> */}
                <Link to="/details" className="text-xl font-semibold">
                  {item?.name}
                </Link>
                <div className="text-sm">{item?.experience}</div>
                <div className="text-sm">{item?.specialty}</div>
                <div className="text-sm">{item?.bio}</div>
                <div className="text-sm">{item?.fee}</div>
              </div>
              <div className="flex flex-col gap-4 items-center justify-center w-3/12">
                <div>Available Today</div>
                <div>
                  <button className="p-2 text-white shadow-custom w-40 rounded-lg bg-blue-300">
                    Contact Clinic
                  </button>
                </div>
                <div>
                  <button className="p-2 text-white shadow-custom w-40 rounded-lg bg-green-300">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Vets;
