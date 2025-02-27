import React, { useEffect, useState } from "react";
import { veterinaryDetails } from "../assets/data/data";
import Clinic from "../assets/clinic.jpg";
import Clinic1 from "../assets/clinic12.jpeg";
import { Button } from "../components/ui/button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Mail, Briefcase } from "lucide-react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import useGet from "../customHooks/useGet";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { IndianRupee, Calendar,Star  } from "lucide-react";

const Doctor = () => {
  veterinaryDetails;
  const [foundDoctors, setFoundDoctors] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [clinic, setClinic] = useState([]);
  const URL = import.meta.env.VITE_BACKEND_URL;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  console.log(id, "line 25");

  const { data, error, loading } = useGet(
    `${URL}/user/get-dentist-details?dentistId=${id}`
  );
  console.log(data, "line number 22");

  useEffect(() => {
    if (data) {
      setFoundDoctors(data);
      setClinic(data?.data?.dentist?.clinic);
      setPageLoading(false);
    }
    if (loading) {
      setPageLoading(true);
    }
  });
  console.log(clinic, "line 44 clinic");
  const navigate = useNavigate();
  const handleAppointment = (clinicId) => {
    navigate(`/book-appointment?clinicId=${clinicId}&dentistId=${id}`);
  };
  return (
    <div className="w-full my-4">
      <div className="flex w-11/12 mx-auto my-0 flex-col md:flex-row lg:flex-row gap-4">
        {veterinaryDetails?.length > 0 && (
          <div
            className="flex w-full flex-col md:flex-row lg:flex-row gap-14"
            key={veterinaryDetails[0]?.id}
          >
            <div className=" flex flex-col h-auto items-center gap-3 rounded-md w-full md:w-3/12 lg:w-3/12 px-4 py-6 bg-white">
              <div className="px-4">
                <img
                  src={data?.data?.dentist?.personalDetails?.image}
                  alt="photo"
                />
              </div>
              <div className="px-4">
                <div className="text-2xl">
                  {data?.data?.dentist?.personalDetails?.prefix}.&nbsp;
                  {data?.data?.dentist?.personalDetails?.Firstname}&nbsp;
                  {data?.data?.dentist?.personalDetails?.lastName}
                </div>
                <div className="text-[#788094]">
                  {data?.data?.dentist?.personalDetails?.bio}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-3xl">Personal Information</div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border-[#d0cece] border-solid border-[0.5]">
                      <Phone size={18} className="text-[#5470FF] text-md" />
                    </div>
                    <span>
                      {data?.data?.dentist?.clinic[0]?.receptionNumber}
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border-[#b0b0b0] border-solid border-[0.5]">
                      <MapPin size={18} className="text-[#5470FF]" />
                    </div>
                    <span>
                      {data?.data?.dentist?.clinic[0]?.clinicAddress},&nbsp;
                      {data?.data?.dentist?.clinic[0]?.area},&nbsp;
                      {data?.data?.dentist?.clinic[0]?.nearbyLandmark}, &nbsp;
                      {data?.data?.dentist?.clinic[0]?.city},&nbsp;
                      {data?.data?.dentist?.clinic[0]?.state}-&nbsp;
                      {data?.data?.dentist?.clinic[0]?.clinicPincode}
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border-[#b0b0b0] border-solid border-[0.5]">
                      <Mail size={18} className="text-[#5470FF]" />
                    </div>
                    <span>{data?.data?.dentist?.personalDetails?.email}</span>
                  </div>
                  <div className="flex flex-row items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border-[#b0b0b0] border-solid border-[0.5]">
                      <Briefcase size={18} className="text-[#5470FF]" />
                    </div>
                    <span>
                      {
                        data?.data?.dentist?.educationalQualification
                          ?.yearsOfExperience
                      }
                      + Years
                    </span>
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
                    <div>
                      <img src={Clinic1} alt="photo" />
                    </div>
                  </div>
                  <div className="h-full w-full rounded-md overflow-hidden">
                    <div>
                      <img src={Clinic1} alt="photo" />
                    </div>
                  </div>
                  <div className="h-full w-full rounded-md overflow-hidden">
                    <div>
                      <img src={Clinic1} alt="photo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-9/12 lg:w-9/12 py-4 px-6 rounded-md bg-white gap-6">
              <div className="flex flex-col gap-4">
                <div className="text-3xl">Introduction</div>
                <span className="text-[#788094]">
                  {data?.data?.dentist?.personalDetails?.prefix}.&nbsp;
                  {data?.data?.dentist?.personalDetails?.Firstname}&nbsp;
                  {data?.data?.dentist?.personalDetails?.lastName} is a highly
                  skilled and experienced veterinary surgeon with a deep passion
                  for animal care. She specializes in performing complex
                  surgical procedures, advanced medical treatments, and critical
                  care for pets. With years of hands-on experience, she is
                  dedicated to providing the highest level of surgical precision
                  and post-operative care to ensure the well-being and recovery
                  of her patients. Dr. Parker is also known for her
                  compassionate approach, taking the time to educate pet owners
                  about their pets' health and treatment options.
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
                <div className="text-3xl">Work Experience</div>
                <div className="grid grid-cols-1 gap-3 items-center">
                 {data?.data?.dentist?.workExperience?.map ((work,index)=>(
                  <div className="flex flex-row items-center gap-2" key={index}>
                    <div className="text-blue-400">
                      <RadioButtonCheckedIcon />
                    </div>
                    <div className="text-[#788094] capitalize">
                      {work?.hospitalName}&nbsp;({work?.fromDate} to {work?.toDate})
                    </div>
                  </div>))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-3xl">Clinic</div>
                <div className="flex flex-col gap-12">
                  {clinic?.map((clinic, index) => (
                    <div className="flex flex-col md:flex-col w-full lg:flex-row gap-4 border-b-2" key={index}>
                      <div
                        className="flex flex-row w-full lg:w-8/12 gap-4 p-4"
                        key={index}
                      >
                        <div className="w-4/12 overflow-hidden border-2 rounded-md border-[#dbd8d8]">
                          <img
                            className="w-full h-full object-contain"
                            src={clinic?.clinicLogo}
                            alt=""
                          />
                        </div>
                        <div className="w-8/12 flex-col flex justify-between">
                          <div className="text-lg font-semibold">
                            {clinic?.clinicName}
                          </div>
                          <div className="text-[#788094] text-sm flex flex-row items-start gap-2">
                            <MapPin size={17} />
                            <span>
                              {clinic?.clinicAddress}&nbsp;{clinic?.area}&nbsp;
                              {clinic?.nearbyLandmark},&nbsp;{clinic?.city},
                              {clinic?.state}-&nbsp;{clinic?.clinicPincode}
                            </span>
                          </div>
                          {/* <div className="flex flex-row gap-2 text-[#788094] text-sm items-start">
                      <Calendar size={17}/>
                      <div className="flex flex-col gap-2" >
                      {clinic?.clinicTiming.map((item,timingIndex)=>(
                          <div className="flex flex-row gap-2" key={timingIndex}>
                          <span className="text-[#5470FF] capitalize">{item?.day}</span>:
                        {item?.slot?.map((item,slotIndex)=>(
                          <div key={slotIndex} className="border-2 rounded-sm border-[#777575] px-4 py-1">
                            <span>{item?.startTime}</span>-
                            <span>{item?.endTime}</span>
                            </div>
                          ))}
                          </div>
                      ))}
                      </div>
                    </div> */}
                          
                          <div className="flex flex-row gap-2 text-[#788094] text-sm items-start">
                            <IndianRupee size={17} />
                            {clinic?.consultationfee}
                          </div>
                          <div className="flex flex-row items-start gap-4 w-full">
                            <Button className="bg-[#5470FF] shadow-btn text-xs md:text-sm lg:text-sm hover:bg-[#455fe3] w-full">
                              View Details
                            </Button>
                            <Button
                              className="bg-[#22C55E] shadow-btn text-xs md:text-sm lg:text-sm hover:bg-[#1f9349] w-full"
                              onClick={() => handleAppointment(clinic?._id)}
                            >
                              Book Appointment
                            </Button>
                          </div>
                          <div className="hidden flex-col items-start gap-4  w-9/12">
                            <div className="text-yellow-500"><Star/><Star/><Star/><Star/><Star/></div>
                            <div className="flex flex-row items-start gap-4">
                              <Button className="bg-[#5470FF] shadow-btn hover:bg-[#455fe3]">
                                View Details
                              </Button>
                              <Button
                                className="bg-[#22C55E] shadow-btn hover:bg-[#1f9349]"
                                onClick={() => handleAppointment(clinic?._id)}
                              >
                                Book Appointment
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sm:flex flex-col lg:flex items-start p-4 gap-4 w-full md:w-6/12">
                      <div className="flex-row flex text-yellow-500"><Star size={17} fill="currentColor"/><Star size={17} fill="currentColor"/><Star size={17} fill="currentColor"/><Star size={17} fill="currentColor"/><Star size={17} fill="currentColor"/></div>
                        <div className="flex flex-row gap-2 text-[#788094] text-sm items-start">
                          <Calendar size={17} />
                          <div className="flex flex-col gap-2">
                            {clinic?.clinicTiming.map((item, timingIndex) => (
                              <div
                                className="flex flex-row gap-2"
                                key={timingIndex}
                              >
                                <span className="text-[#5470FF] capitalize">
                                  {item?.day}
                                </span>
                                :
                                {item?.slot?.map((item, slotIndex) => (
                                  <div
                                    key={slotIndex}
                                  
                                  >
                                    <span>{item?.startTime}</span>-
                                    <span>{item?.endTime}</span>
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-6">
                  <div className="text-3xl font-semiBold">Write a Review</div>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                      <div className="text-xl">Select a rating</div>
                      <div className="flex flex-row gap-2">
                        <StarBorderIcon className="cursor-pointer" />
                        <StarBorderIcon className="cursor-pointer" />
                        <StarBorderIcon className="cursor-pointer" />
                        <StarBorderIcon className="cursor-pointer" />
                        <StarBorderIcon className="cursor-pointer" />
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
                    <div className="flex border-b-2 px-2 py-4 border-[#eae8e8] flex-col md:flex-row lg:flex-row gap-4 w-full">
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
                        <div className="flex flex-row items-center gap-2">
                          <div>Happy With:</div>
                          <ul className="grid grid-cols-3 items-center gap-2">
                            <li className="text-xs md:text-sm lg:text-sm border-2 border-[#b0b0b0] p-1 rounded-sm cursor-pointer hover:bg-[#5470ff] transition-all duration-300 hover:text-white">
                              Doctor friendliness
                            </li>
                            <li className="text-xs md:text-sm lg:text-sm border-2 border-[#b0b0b0] p-1 rounded-sm cursor-pointer hover:bg-[#5470ff] transition-all duration-300 hover:text-white">
                              Quick resolution
                            </li>
                            <li className=" text-xs md:text-sm lg:text-sm border-2 border-[#b0b0b0] p-1 rounded-sm cursor-pointer hover:bg-[#5470ff] transition-all duration-300 hover:text-white">
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
