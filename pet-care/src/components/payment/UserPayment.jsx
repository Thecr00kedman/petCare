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
  import { FileText } from "lucide-react";
import {Button} from '@/components/ui/button'
import { BounceLoader  } from "react-spinners";
import useGet from '@/customHooks/useGet';
import { AuthContext } from '@/context/AuthProvider';


const UserPayment = () => {
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
  const {data,loading,error}=useGet(`${URL}/user/patient-payment-history?patientId=${user?.userId}&paymentFor=${PaymentFor}&page=${page}`)
  console.log(data,'line 22')
  const convertToIST = (utcDate) => {
      const date = parseISO(utcDate); 
      const istDate = addMinutes(date, 330);
      return format(istDate, "dd-MM-yyyy"); 
    };
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
          <div className='flex flex-col gap-6 p-4'>
            <div className='text-lg m-6 md:text-xl lg:text-3xl flex-col flex justify-center items-center'>Your Recent Payments</div>
            <div>
            
                <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Appointment</TableHead>
              <TableHead>Doctor</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          {
              data?.data?.payments?.map((payment,index)=>(
            
              <TableRow key={index}>
              <TableCell className="font-medium">{payment?.appointmentId?.customAppointmentId}</TableCell>
              <TableCell>Dr.&nbsp;{payment?.dentistId?.personalDetails?.Firstname}&nbsp;{payment?.dentistId?.personalDetails?.lastName}</TableCell>
              <TableCell>{convertToIST(payment?.createdAt)}</TableCell>
              <TableCell>{payment?.paymentStatus}</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">₹{payment?.totalAmount}</TableCell>
              <TableCell className="text-center flex flex-row justify-center gap-2">
                {payment?.paymentStatus==='paid'?(<Button disabled className='bg-slate-400'>Paid</Button>):
                (<Button className='bg-blue-500 hover:bg-[#325999]'>Pay</Button>)}
                <Button className='bg-blue-500 hover:bg-[#325999]'><FileText /></Button>
              </TableCell>
            </TableRow>
           
            
          ))
        }
          </TableBody>
            </Table>
              <Pagination paginationData={paginationData} setPage={setPage} />
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

export default UserPayment
