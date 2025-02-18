import React from "react";
import { veterinaryDetails } from "../assets/data/data";
import { Button } from "../components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

veterinaryDetails;
const Doctor = () => {
  return (
    <div className="w-full my-4">
      <div className="flex w-11/12 mx-auto my-0 flex-row gap-4">
        {veterinaryDetails?.length > 0 && (
          <div
            className="flex w-full flex-row gap-14"
            key={veterinaryDetails[0]?.id}
          >
            <div className=" flex flex-col items-center rounded-md w-3/12 px-4 py-6 bg-white">
              <div>
                <img src={veterinaryDetails[0]?.photo} alt="" />
              </div>
              <div>
                <div>{veterinaryDetails[0]?.name}</div>
                <div>{veterinaryDetails[0]?.bio}</div>
              </div>
            </div>
            <div className="flex flex-col w-9/12 px-6 py-8 rounded-md bg-white gap-6">
              <div>
                <div className="text-3xl">Introduction</div>
                <span className="text-[#788094]">
                  {veterinaryDetails[0]?.bio}
                </span>
              </div>
              <div>
                <div className="text-3xl">Specialty</div>
                <div className="text-[#788094]">
                  {veterinaryDetails[0]?.specialty}
                </div>
              </div>
              <div>
                <div className="text-3xl">Work Experience</div>
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="text-lg">Fortis Hospital</div>
                    <div className="flex flex-row gap-6">
                      <div className="text-[#788094]">21-09-2021</div>
                      <div className="text-[#788094]">22-09-2024</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold">Appolo Hospital</div>
                    <div className="flex flex-row gap-6">
                      <div className="text-[#788094]">21-09-2021</div>
                      <div className="text-[#788094]">22-09-2024</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-3xl">Educational Info</div>
                <div>
                  <div>Stanford Institute of Technology</div>
                  <div>M.B.B.S</div>
                  <div className="flex flex-row gap-6">
                    <div className="text-[#788094]">21-09-2021</div>
                    <div className="text-[#788094]">22-09-2024</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-3xl my-6">Clinic</div>
                <div className="flex w-full flex-row gap-4">
                  <div className="w-2/12 border-2 rounded-s-md border-[#dbd8d8]">
                    <img src="photos" alt="" />
                  </div>
                  <div className="w-6/12">
                    <div className="text-lg font-semibold">Clinic Name</div>
                    <div>
                      <span>Clinic Address road delhi-300012</span>
                    </div>

                    <div>Consultation Fee:Rupees 180</div>
                  </div>
                  <div className="flex flex-col items-start gap-4 w-4/12">
                    <div>Clinic Rating</div>
                    <div className="flex flex-row items-start gap-4">
                      <Button>View Details</Button>
                      <Button>Book Appointment</Button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-6">
                  <div className="text-3xl font-semiBold">Write a Review</div>
                  <div className="flex flex-col gap-6">
                    <div className="grid w-full gap-1.5">
                      <Textarea
                        placeholder="Type your message here."
                        id="message"
                      />
                    </div>
                    <Button className="w-3/12 bg-[#5470ff] transition-all duration-300 hover:bg-[#3d53c6] shadow-btn">
                      Submit
                    </Button>
                  </div>
                  <div className="flex flex-col gap-6 w-full">
                    <div className="text-3xl">Patient Stories</div>
                    <div className="flex border-b-2 px-2 py-4 border-[#eae8e8] flex-row gap-4 w-full">
                      <div className="w-1/12">
                        <div className="w-12 h-12 rounded-full text-white bg-black items-center flex justify-center">
                          P
                        </div>
                      </div>
                      <div className="w-11/12 flex flex-col gap-2">
                        <div className="flex flex-row justify-between">
                          <div className="text-xl font-semibold">
                            Patient Name
                          </div>
                          <div>Time</div>
                        </div>
                        <div className="text-xl font-semibold">Visited for Stress</div>
                        <div>I recommend this Vet</div>
                        <div className="flex flex-row items-center gap-6">
                          <div>Happy With:</div>
                          <ul className="flex flex-row gap-2 items-center">
                            <li className="border-2 border-[#b0b0b0] p-1 rounded-sm cursor-pointer hover:bg-[#5470ff] transition-all duration-300 hover:text-white">
                              Doctor friendliness
                            </li>
                            <li className="border-2 border-[#b0b0b0] p-1 rounded-sm cursor-pointer hover:bg-[#5470ff] transition-all duration-300 hover:text-white">
                              Explanation of the health issue
                            </li>
                            <li className="border-2 border-[#b0b0b0] p-1 rounded-sm cursor-pointer hover:bg-[#5470ff] transition-all duration-300 hover:text-white">
                              Value for money
                            </li>
                          </ul>
                        </div>
                        <div>
                          <span>
                            I visited Dr Satish Kumar for my sleeping disorder
                            issue. First of all he made me feel comfortable and
                            gave his ample amount of time to completely
                            understand my problem. He patiently listened to my
                            issues and explained the root cause of problems. In
                            his counselling sessions he gave me lots of
                            suggestions and answered many of my queries which
                            helped me overcome my anxiety issues and slowly
                            recovered my sleep issue.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctor;
