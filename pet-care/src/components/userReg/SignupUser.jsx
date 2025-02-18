import React from 'react'
import { useForm } from "react-hook-form";
import SignupSchema from "@/schemas/SignupSchema";
import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input';
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Link } from 'react-router-dom';



const Signupuser = () => {
    const form = useForm({
        resolver: zodResolver(SignupSchema),
        defaultValues: {
          username: "",
          email:"",
          password:""
        },
      })
      const onSubmit=(data)=> {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(data)
      }
  return (
    <div className='my-16 mx-auto w-3/5 flex gap-4 flex-col '>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 flex flex-col gap-3">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Name</FormLabel> */}
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Phone</FormLabel> */}
              <FormControl>
                <Input type='tel' placeholder="Phone" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Email</FormLabel> */}
              <FormControl>
                <Input type='email' placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Password</FormLabel> */}
              <FormControl>
                <Input type='password' placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className='bg-[#5470ff] transition-all duration-300 focus:scale-[.95] hover:bg-[#3d53c6] shadow-btn'>Register</Button>
      </form>
    </Form>
    <div>Already a User?<Link to='/login'>Login</Link></div>
    </div>
  )
}


export default Signupuser
