import { React, useState } from "react";
// import { veterinaryDetails } from "@/src/assets/data/data";
import { Calendar, MapPin,Clock } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import profile from '../../assets/testimonial1.jpg'
import { Link } from "react-router-dom";
const Appointments = () => {
  const [filters, setFilters] = useState({
    gender: "",
    rating: "",
    location: "",
    specialty: "",
    fee: "",
  });

  const handleChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
    console.log("Updated Selection:", setFilters);
  };
  console.log(filters, "these are selected filters");
  return (
    <div className="flex flex-col gap-6">
      <div className='text-4xl w-11/12 mx-auto my-4'><h3>My Appointments</h3></div>
      <div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 p-4 bg-white items-center w-11/12 mx-auto my-4 gap-2">
          <div>
            <Select
              onValueChange={(value) => handleChange("gender", value)}
              className="w-full"
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">male</SelectItem>
                <SelectItem value="female">female</SelectItem>
                <SelectItem value="others">others</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select
              onValueChange={(value) => handleChange("rating", value)}
              className="w-full"
            >
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
            <Select
              onValueChange={(value) => handleChange("location", value)}
              className="w-full focus:none"
            >
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
            <Select
              onValueChange={(value) => handleChange("specialty", value)}
              className="w-full"
            >
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
            <Select
              onValueChange={(value) => handleChange("fee", value)}
              className="w-full"
            >
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
      </div>
      <div className='w-11/12 mx-auto my-4'>
        <div>
          <div>
            <h3 className='text-xl font-semibold'>Upcoming</h3>
            <div>
                <div className='py-4 px-0'>
                    <div className='flex flex-row items-center bg-white px-2 py-4 gap-4 w-full rounded-lg'>
                       <div className='w-1/12 items-center'>
                       <div className='w-14 h-14 rounded-full overflow-hidden'>
                            <img src={profile} alt="this is a pic" />
                        </div>
                       </div>
                        <div className='flex flex-col items-start w-8/12 gap-2'>
                            <div className='text-[#0e1721]'>Doctor Amanda</div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex text-sm flex-row items-center gap-2'><Calendar className='text-blue-500 text-sm'/>14-03-2025<Clock className='text-blue-500'/>10:00 am </div>
                                <div className='flex text-sm flex-row items-center gap-2'><MapPin  className='text-blue-500 text-sm'/><span className='text-[#111623e0]'>Delhi road delhi</span></div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row lg:flex-row gap-3 w-3/12'>
                            <Link className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-[#3472d7]">View Details</Link>
                            <Link className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-[#3472d7]">Cancel</Link>
                        </div>
                    </div>
                </div>
                <div className='py-4 px-0'>
                    <div className='flex flex-row items-center bg-white px-2 py-4 gap-4 w-full rounded-lg'>
                       <div className='w-1/12 items-center'>
                       <div className='w-14 h-14 rounded-full overflow-hidden'>
                            <img src={profile} alt="this is a pic" />
                        </div>
                       </div>
                        <div className='flex flex-col items-start w-8/12 gap-2'>
                            <div className='text-[#0e1721]'>Doctor Amanda</div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex text-sm flex-row items-center gap-2'><Calendar className='text-blue-500 text-sm'/>14-03-2025<Clock className='text-blue-500'/>10:00 am </div>
                                <div className='flex text-sm flex-row items-center gap-2'><MapPin  className='text-blue-500 text-sm'/><span className='text-[#111623e0]'>Delhi road delhi</span></div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row lg:flex-row gap-3 w-3/12'>
                            <Link className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-[#3472d7]">View Details</Link>
                            <Link className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-[#3472d7]">Cancel</Link>
                        </div>
                    </div>
                </div>
                <div className='py-4 px-0'>
                    <div className='flex flex-row items-center bg-white px-2 py-4 gap-4 w-full rounded-lg'>
                       <div className='w-1/12 items-center'>
                       <div className='w-14 h-14 rounded-full overflow-hidden'>
                            <img src={profile} alt="this is a pic" />
                        </div>
                       </div>
                        <div className='flex flex-col items-start w-8/12 gap-2'>
                            <div className='text-[#0e1721]'>Doctor Amanda</div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex text-sm flex-row items-center gap-2'><Calendar className='text-blue-500 text-sm'/>14-03-2025<Clock className='text-blue-500'/>10:00 am </div>
                                <div className='flex text-sm flex-row items-center gap-2'><MapPin  className='text-blue-500 text-sm'/><span className='text-[#111623e0]'>Delhi road delhi</span></div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row lg:flex-row gap-3 w-3/12'>
                            <Link className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-[#3472d7]">View Details</Link>
                            <Link className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-[#3472d7]">Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div>
        <h3 className='text-xl font-semibold'>Past</h3>
          <div>
                <div className='py-4 px-0'>
                    <div className='flex flex-row items-center bg-white px-2 py-4 gap-4 w-full rounded-lg'>
                       <div className='w-1/12 items-center'>
                       <div className='w-14 h-14 rounded-full overflow-hidden'>
                            <img src={profile} alt="this is a pic" />
                        </div>
                       </div>
                        <div className='flex flex-col items-start w-8/12 gap-2'>
                            <div className='text-[#0e1721]'>Doctor Amanda</div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex text-sm flex-row items-center gap-2'><Calendar className='text-blue-500 text-sm'/>14-03-2025<Clock className='text-blue-500'/>10:00 am </div>
                                <div className='flex text-sm flex-row items-center gap-2'><MapPin  className='text-blue-500 text-sm'/><span className='text-[#111623e0]'>Delhi road delhi</span></div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row lg:flex-row gap-3 w-3/12'>
                            <Link className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-[#3472d7]">View Details</Link>
                            <Link className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-[#3472d7]">Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
