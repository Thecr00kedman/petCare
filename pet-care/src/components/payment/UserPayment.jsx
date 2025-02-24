import React from 'react'
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
const UserPayment = () => {
  return (
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
    <TableRow>
      <TableCell className="font-medium">APID001</TableCell>
      <TableCell>Johny Doe</TableCell>
      <TableCell>22-02-2025</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">₹250.00</TableCell>
      <TableCell className="text-center flex flex-row justify-center gap-2">
        <Button className='bg-blue-500 hover:bg-[#325999]'>Pay</Button>
        <Button className='bg-blue-500 hover:bg-[#325999]'><FileText /></Button>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">APID001</TableCell>
      <TableCell>Johny Doe</TableCell>
      <TableCell>22-02-2025</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">₹250.00</TableCell>
      <TableCell className="text-center flex flex-row justify-center gap-2">
        <Button className='bg-blue-500 hover:bg-[#325999]'>Pay</Button>
        <Button className='bg-blue-500 hover:bg-[#325999]'><FileText /></Button>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">APID001</TableCell>
      <TableCell>Johny Doe</TableCell>
      <TableCell>22-02-2025</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">₹250.00</TableCell>
      <TableCell className="text-center flex flex-row justify-center gap-2">
        <Button className='bg-blue-500 hover:bg-[#325999]'>Pay</Button>
        <Button className='bg-blue-500 hover:bg-[#325999]'><FileText /></Button>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">APID001</TableCell>
      <TableCell>Johny Doe</TableCell>
      <TableCell>22-02-2025</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">₹250.00</TableCell>
      <TableCell className="text-center flex flex-row justify-center gap-2">
        <Button className='bg-blue-500 hover:bg-[#325999]'>Pay</Button>
        <Button className='bg-blue-500 hover:bg-[#325999]'><FileText /></Button>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">APID001</TableCell>
      <TableCell>Johny Doe</TableCell>
      <TableCell>22-02-2025</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">₹250.00</TableCell>
      <TableCell className="text-center flex flex-row justify-center gap-2">
        <Button className='bg-blue-500 hover:bg-[#325999]'>Pay</Button>
        <Button className='bg-blue-500 hover:bg-[#325999]'><FileText /></Button>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
    </div>
  )
}

export default UserPayment
