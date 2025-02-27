import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger
} from "@/components/ui/dialog";
import Pagination from "../components/pagination/Pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Award, Stethoscope, User, Wallet } from "lucide-react";
import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import useGet from "../customHooks/useGet";

const Vets = () => {
  const [filters, setFilters] = useState({
    gender: "",
    rating: "",
    location: "",
    specialty: "",
    fee: "",
  });
  const[doctors,setDoctors]=useState([])
  const navigate = useNavigate();
  const [search, setSearch] = useState({
    city:'',
    search:""
  });
  const [page, setPage] = useState(1);
  const [paginationData, setPaginationData] = useState({
    totalDocs: 0,
    currentPage: 1,
    limit: 4,
    totalPages: 1,
  });
  
  const[clinic,setClinic]=useState({
    clinic:""
  })
  console.log(clinic,'line 36')
  const handleClinic=(field,value)=>{
    console.log("field:",field,"value:",value)
    setClinic((prev) => ({
      ...prev,
      [field]: value,
    }));
    console.log('selected clinic:',clinic)
  }
  const URL = import.meta.env.VITE_BACKEND_URL;
  const { data: dentistsData, loading, error } = useGet(`${URL}/user/get-dentists?page=${page}`);
  // const { data: searchData } = useGet(`${URL}/user/search?searchText=${search?.search}&location=${search?.city}`);
  // console.log(searchData,'search data')
  console.log(dentistsData, "line");
  console.log(dentistsData?.currentPage,'line 47')
  const handSearchChange = (e) => {
    setSearch((prev) => ({
      ...prev,
      [e?.target?.name]: e?.target?.value,
    }));
  };
  const handleAppointment = () => {
    // navigate("/book-appointment");
    console.log("clicked");
  };
  const handleDoctorDetails = (id) => {
    navigate(`/details?id=${id}`);
  };
  console.log(search, "this is search");
  const handleChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
    console.log("Updated Selection:", setFilters);
  };
  console.log(filters, "these are selected filters");

  useEffect(() => {
    if (dentistsData) {
      setPaginationData({
        totalDocs: dentistsData.totalDocs || 0,
        currentPage: dentistsData.currentPage || 1,
        limit: dentistsData.limit || 10,
        totalPages: dentistsData.totalPages || 1,
      });
      setDoctors(dentistsData?.data)
    }
    // if(searchData){
    //   setDoctors(searchData?.data)
    // }
  }, [dentistsData,page]);
  console.log(doctors,'line 98')
  return (
    <div>
      <div className="my-24">
        <div className="w-10/12 md:w-10/12 lg:w-3/5 mx-auto my-8">
          <div className="flex flex-row">
            <select
              className="text-xs cursor-pointer md:text-sm lg:text-sm w-3/12 border-r-2 text-center border-blue-200"
              name="city"
              id="city"
              onChange={(e) => handSearchChange(e)}
            >
              <option value="lucknow">Lucknow</option>
              <option value="kolkata">Kolkata</option>
              <option value="delhi">Delhi</option>
            </select>
            <input
              onChange={(e) => handSearchChange(e)}
              className="w-9/12 h-12 px-4"
              type="search"
              name="search"
            />
          </div>
        </div>
        <div>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 p-4 bg-white items-center w-10/12 mx-auto my-4 gap-2">
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
          <div className="grid py-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 w-11/12 mx-auto my-0">
            {loading ? (
              <div>
                <PacmanLoader />
              </div>
            ) : dentistsData?.data?.dentists ? (
              <div className="w-12/12 bg-[#f7f7f5]">
                {dentistsData?.data?.dentists?.map((item, index) => (
                  <div
                    className="flex-col w-10/12 mx-auto my-4 bg-white px-2 py-4 border-blue-100 border-b-2 pb-4 flex"
                    key={index}
                  >
                    <div className="flex flex-row gap-4" key={index}>
                      <div className="h-52 w-3/12">
                        <img
                          className="h-full w-full object-cover object-top"
                          src={item?.personalDetails?.image}
                          alt="photo"
                        />
                      </div>
                      <div className="w-9/12 flex flex-col gap-2">
                        {/* <div className="text-xl font-semibold">{item?.name}</div> */}
                        <Link to="/details" className="text-xl font-semibold">
                          {item?.personalDetails?.prefix}.&nbsp;
                          {item?.personalDetails?.Firstname}&nbsp;
                          {item?.personalDetails?.lastName}
                        </Link>
                        <div className="flex flex-row gap-2 text-xs text-[#b0b0b0] sm:text-xs md:text-sm lg:text-sm">
                          <Award className="text-green-500 flex flex-row items-center" />
                          &nbsp;
                          {item?.educationalQualification?.yearsOfExperience}
                          &nbsp;Years+
                        </div>
                        <div className="flex flex-row gap-2 text-xs text-[#b0b0b0] sm:text-xs md:text-sm lg:text-sm">
                          <Stethoscope className="text-green-500 flex flex-row items-center" />
                          &nbsp;{item?.personalDetails?.specialty}
                        </div>
                        <div className="flex flex-row gap-2 text-xs text-[#b0b0b0] sm:text-xs md:text-sm lg:text-sm">
                          <User className="text-green-500 flex flex-row items-center" />
                          {item?.personalDetails?.Bio}
                        </div>
                        <div className="flex flex-row gap-2 text-xs text-[#b0b0b0] sm:text-xs md:text-sm lg:text-sm">
                          <Wallet className="text-green-500 flex flex-row items-center" />
                          ₹&nbsp;{item?.fee || "200"}
                        </div>
                      </div>
                      <div className="hidden lg:flex lg:flex-col lg:mx-auto lg:my-2 gap-4 justify-center w-3/12 sm:hidden">
                        {/* <div>Available Today</div> */}
                        <div>
                          <button
                            onClick={() => handleDoctorDetails(item?._id)}
                            className="p-2 text-white shadow-custom w-40 rounded-lg bg-green-300"
                          >
                            View Details
                          </button>
                        </div>
                        <div>
                          <button className="p-2 text-white shadow-custom w-40 rounded-lg bg-blue-300">
                            Contact Clinic
                          </button>
                        </div>
                        <div>
                          <Dialog>
                            <DialogTrigger asChild>
                              <button
                                onClick={() => handleAppointment()}
                                className="p-2 text-white shadow-custom w-40 rounded-lg bg-green-300"
                              >
                                Book Appointment
                              </button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader className="flex flex-col gap-5">
                                
                                <div className="flex w-full flex-col gap-3 items-center">
                                  <div className="text-xl w-full">Select a Clinic</div>
                                  <div className="w-full">
                                    <Select
                                      onValueChange={(value) =>
                                        handleClinic("clinic", value)
                                      }
                                      className="w-full"
                                    >
                                      <SelectTrigger className="w-full">
                                        <SelectValue className="w-full" placeholder="Select a Clinic" value={clinic?.clinic}/>
                                      </SelectTrigger>
                                      <SelectContent className='w-full'>
                                        {item?.clinic?.map((clinic,index)=>(
                                          <SelectItem className='w-full' value={clinic?._id} key={index}>
                                         {clinic?.clinicName}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </div>
                                <Link className={`${clinic?.clinic=== '' ? 'hidden' : 'flex'}`}to={`/book-appointment?clinicId=${clinic?.clinic}&dentistId=${item._id}`}>Next</Link>
                              </DialogHeader>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </div>
                    <div className="lg:hidden flex sm:flex-row sm:mx-auto sm:my-2 gap-4 items-center justify-center sm:w-full w-full">
                      {/* <div>Available Today</div> */}
                      <div className="w-full text-sm">
                        <button className="p-2 text-white shadow-custom w-full sm:text-sm rounded-lg bg-blue-300">
                          Contact Clinic
                        </button>
                      </div>
                      <div className="w-full text-sm">
                        <button className="p-2 text-white shadow-custom w-full sm:text-sm rounded-lg bg-green-300">
                          Book Appointment
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
               <div className="flex flex-row w-full justify-center items-center mx-auto my-6">
               <Pagination paginationData={paginationData} setPage={setPage}/>
               </div>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center">
                <PacmanLoader color="#22c55e" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vets;
