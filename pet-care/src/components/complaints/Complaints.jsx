import React, { useContext,useEffect,useState } from 'react'
import { format, addMinutes, parseISO } from "date-fns";
import Pagination from '../pagination/Pagination';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { BounceLoader  } from "react-spinners";
import useGet from '@/customHooks/useGet';
import { AuthContext } from '@/context/AuthProvider';
import { Link } from 'react-router-dom';


const Complaints = () => {
  const[page,setPage]=useState(1)
  const[paginationData,setPaginationData]=useState({
    totalDocs: 0,
    currentPage: 1,
    limit: 8,
    totalPages: 1,
  })
  const {user} =useContext(AuthContext)
  const URL=import.meta.env.VITE_BACKEND_URL
  const PaymentFor="appointment"
  const {data,loading,error}=useGet(`${URL}/user/get-all-complaints?patientId=${user?.userId}&page=${page}`)
  console.log(data,'line 22')
  const convertToIST = (utcDate) => {
      const date = parseISO(utcDate); 
      const istDate = addMinutes(date, 330);
      return format(istDate, "dd-MM-yyyy"); 
    };
    console.log(error)
  useEffect(() => {
      if (data) {
        setPaginationData({
          totalDocs: data?.data?.pagination?.totalDocs || 0,
          currentPage: data?.data?.pagination?.currentPage || 1,
          limit: data?.data?.pagination?.limit || 10,
          totalPages: data?.data?.pagination?.totalPages || 1,
        });
       
      }},
      [page,data])
  return (
    <div>
      {
        loading?(
          <div className='flex justify-center items-center h-screen'><BounceLoader color='#22c55e'/></div>
        )
        :data?
        (
          <div className='flex-col gap-6 p-4 flex h-full'>
            <div className='text-lg m-6 md:text-xl lg:text-3xl flex-col flex justify-center items-center'>Your Recent Complaints</div>
            <div>
            
                <Table>
          <TableCaption>A list of your recent Complaint.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Sl. No.</TableHead>
              <TableHead className="w-[100px]">Complaint</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Mobile Number</TableHead>
              <TableHead className="text-right">Complaint Type</TableHead>
              <TableHead className="text-center">Raised By</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          {
              (data?.foundComplaints?.length===0 ||!data)?(
                <TableRow>
                <TableCell colSpan={7} className='tex-center text-gray-500'>No Data Found</TableCell>
              </TableRow>
              ):
              (data?.foundComplaints?.map((complaint,index)=>(
                <TableRow key={index}>
                <TableCell className="font-medium">{index+1}</TableCell>
                <TableCell>{complaint?.customComplaintId}</TableCell>
                <TableCell>{complaint?.patientId?.name}</TableCell>
                <TableCell>{convertToIST(complaint?.createdAt)}</TableCell>
                <TableCell>{complaint?.status}</TableCell>
                <TableCell>{complaint?.patientId?.phone}</TableCell>
                <TableCell className="text-right">{complaint?.complaintType}</TableCell>
                <TableCell>
                 {complaint?.raisedBy}
                </TableCell>
                <TableCell>
                <Link  className='bg-[#5271FF] hover:bg-[#3650c4] px-4 py-2 text-white rounded-sm'>View Details</Link>
                </TableCell>
              </TableRow>
             
              
            )))
        }
          </TableBody>
            </Table>
            {data?.foundComplaints?.length > 0 && !data&& (
  <Pagination paginationData={paginationData} setPage={setPage} />
)}
            </div>
          </div>
        ):
        (
          <div>this</div>
        )
      }
    </div>
  )
}

export default Complaints
