import React from "react";
import { veterinaryDetails } from "../assets/data/data";
import Clinic from "../assets/clinic.jpg";
import Clinic1 from '../assets/clinic12.jpeg'
import { Button } from "../components/ui/button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Mail, Briefcase } from "lucide-react";
import StarBorderIcon from '@mui/icons-material/StarBorder';

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
            <div className=" flex flex-col h-auto items-center gap-3 rounded-md w-3/12 px-4 py-6 bg-white">
              <div className="px-4">
                <img src={veterinaryDetails[0]?.photo} alt="photo" />
              </div>
              <div className="px-4">
                <div className="text-2xl font-semibold">
                  {veterinaryDetails[0]?.name}
                </div>
                <div className="text-[#788094]">
                  {veterinaryDetails[0]?.bio}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-3xl">Personal Information</div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border-[#d0cece] border-solid border-[0.5]">
                      <Phone size={18} className="text-[#5470FF] text-md" />
                    </div>
                    <span>1234567</span>
                  </div>
                  <div className="flex flex-row items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border-[#b0b0b0] border-solid border-[0.5]">
                      <MapPin size={18} className="text-[#5470FF]" />
                    </div>
                    <span>12 delhi marg 80000</span>
                  </div>
                  <div className="flex flex-row items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border-[#b0b0b0] border-solid border-[0.5]">
                      <Mail size={18} className="text-[#5470FF]" />
                    </div>
                    <span>john@gmail.com</span>
                  </div>
                  <div className="flex flex-row items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border-[#b0b0b0] border-solid border-[0.5]">
                      <Briefcase size={18} className="text-[#5470FF]" />
                    </div>
                    <span>8 years</span>
                  </div>
                </div>
                <ul className="flex flex-row gap-3 my-4">
                  <li className="w-12 h-12 rounded-full hover:bg-[#5470ff] transition-all duration-500 cursor-pointer hover:text-white shadow-btn  flex items-center justify-center border-[0.8] border-solid border-black">
                    <FacebookIcon />
                  </li>
                  <li className="w-12 h-12 rounded-full hover:bg-[#5470ff] transition-all duration-500 cursor-pointer hover:text-white shadow-btn  flex items-center justify-center border-[0.8] border-solid border-black">
                    <LinkedInIcon />
                  </li>
                  <li className="w-12 h-12 rounded-full hover:bg-[#5470ff] transition-all duration-500 cursor-pointer hover:text-white shadow-btn  flex items-center justify-center border-[0.8] border-solid border-black">
                    <TwitterIcon />
                  </li>
                  <li className="w-12 h-12 rounded-full hover:bg-[#5470ff] transition-all duration-500 cursor-pointer hover:text-white shadow-btn  flex items-center justify-center border-[0.8] border-solid border-black">
                    <WhatsAppIcon />
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 px-4">
              <div className="text-3xl">Medias</div>
                <div className="flex flex-col gap-7">
                <div className="h-full w-full rounded-md overflow-hidden">
                    <div><img src={Clinic1} alt="photo" /></div>
                </div>
                <div className="h-full w-full rounded-md overflow-hidden">
                    <div><img src={Clinic1} alt="photo" /></div>
                </div>
                <div className="h-full w-full rounded-md overflow-hidden">
                    <div><img src={Clinic1} alt="photo" /></div>
                </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-9/12 px-6 py-8 rounded-md bg-white gap-6">
              <div className="flex flex-col gap-4">
                <div className="text-3xl">Introduction</div>
                <span className="text-[#788094]">
                  Dr. Emily Parker is a highly skilled and experienced
                  veterinary surgeon with a deep passion for animal care. She
                  specializes in performing complex surgical procedures,
                  advanced medical treatments, and critical care for pets. With
                  years of hands-on experience, she is dedicated to providing
                  the highest level of surgical precision and post-operative
                  care to ensure the well-being and recovery of her patients.
                  Dr. Parker is also known for her compassionate approach,
                  taking the time to educate pet owners about their pets' health
                  and treatment options.
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-3xl">Specialty</div>
                <div className="grid grid-cols-2 gap-3 items-center">
                  <div className="flex flex-row items-center gap-2">
                    <div className="text-[#28a745]">
                      <ArrowCircleRightIcon />
                    </div>
                    <div className="text-[#788094]">
                      {veterinaryDetails[0]?.specialty}
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="text-[#28a745]">
                      <ArrowCircleRightIcon />
                    </div>
                    <div className="text-[#788094]">
                      {veterinaryDetails[0]?.specialty}
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="text-[#28a745]">
                      <ArrowCircleRightIcon />
                    </div>
                    <div className="text-[#788094]">
                      {veterinaryDetails[0]?.specialty}
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="text-[#28a745]">
                      <ArrowCircleRightIcon />
                    </div>
                    <div className="text-[#788094]">
                      {veterinaryDetails[0]?.specialty}
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="text-[#28a745]">
                      <ArrowCircleRightIcon />
                    </div>
                    <div className="text-[#788094]">
                      {veterinaryDetails[0]?.specialty}
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="text-[#28a745]">
                      <ArrowCircleRightIcon />
                    </div>
                    <div className="text-[#788094]">
                      {veterinaryDetails[0]?.specialty}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div>
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
              </div> */}
              <div className="flex flex-col gap-4">
                <div className="text-3xl">Educational Info</div>
                <div className="grid grid-cols-1 gap-3 items-center">
                <div className="flex flex-row items-center gap-2">
                  <div className="text-blue-400"><RadioButtonCheckedIcon/></div>
                  <div className="text-[#788094]">Stanford Institute of Technology (M.B.B.S 2021 to
                    2024)</div> 
                </div>
                <div className="flex flex-row items-center gap-2">
                  <div className="text-blue-400"><RadioButtonCheckedIcon/></div>
                  <div className="text-[#788094]">Stanford Institute of Technology (M.B.B.S 2021 to
                    2024)</div> 
                </div>
                <div className="flex flex-row items-center gap-2">
                  <div className="text-blue-400"><RadioButtonCheckedIcon/></div>
                  <div className="text-[#788094]">Stanford Institute of Technology (M.B.B.S 2021 to
                    2024)</div> 
                </div>
                <div className="flex flex-row items-center gap-2">
                  <div className="text-blue-400"><RadioButtonCheckedIcon/></div>
                  <div className="text-[#788094]">Stanford Institute of Technology (M.B.B.S 2021 to
                    2024)</div> 
                </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-3xl">Clinic</div>
                <div className="flex flex-col gap-3">
                <div className="flex w-full flex-row gap-4 border-b-2 p-3">
                  <div className="w-2/12 overflow-hidden border-2 rounded-md border-[#dbd8d8]">
                    <img className='w-full h-full object-contain'src={Clinic} alt="" />
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
                      <Button className='bg-[#5470FF] shadow-btn hover:bg-[#455fe3]'>View Details</Button>
                      <Button className='bg-[#22C55E] shadow-btn hover:bg-[#1f9349]'>Book Appointment</Button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-row gap-4 border-b-2 p-3">
                  <div className="w-2/12 border-2 rounded-s-md border-[#dbd8d8]">
                    <img src={Clinic} alt="" />
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
                    <Button className='bg-[#5470FF] shadow-btn hover:bg-[#455fe3]'>View Details</Button>
                    <Button className='bg-[#22C55E] shadow-btn hover:bg-[#1f9349]'>Book Appointment</Button>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-6">
                  <div className="text-3xl font-semiBold">Write a Review</div>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                        <div className="text-xl">Select a rating</div>
                        <div className="flex flex-row gap-2">
                            <StarBorderIcon className="cursor-pointer"/>
                            <StarBorderIcon className="cursor-pointer"/>
                            <StarBorderIcon className="cursor-pointer"/>
                            <StarBorderIcon className="cursor-pointer"/>
                            <StarBorderIcon className="cursor-pointer"/>
                        </div>
                    </div>
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
                        <div className="text-xl font-semibold">
                          Visited for Stress
                        </div>
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
