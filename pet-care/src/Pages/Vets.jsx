import React from "react";
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
          >
            <option value="lucknow">Lucknow</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
          </select>
          <input className="w-9/12 h-12" type="search" name="search" />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-4 p-4 bg-white items-center w-11/12 mx-auto my-4 gap-2">
          <div>
            <Select className="w-full">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select className="w-full">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Ratings" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select className="w-full">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select className="w-full">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid bg-white px-4 py-6 grid-cols-2 gap-6 w-11/12 mx-auto my-0">
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
