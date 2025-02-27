import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import SignupSchema from "@/schemas/SignupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from 'react';
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import { AuthContext } from '@/context/AuthProvider';
import Cookies from 'js-cookie';
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import usePost from '../../customHooks/usePost';

const Signupuser = () => {
    const form = useForm({
        resolver: zodResolver(SignupSchema),
        defaultValues: {
          username: "",
          email:"",
          password:""
        },
      })
      const navigate=useNavigate()
      const URL = import.meta.env.VITE_BACKEND_URL;
      
      const [showPassword, setShowPassword] = useState(false);
      const { postData, loading, error } = usePost(`${URL}/user/user-signup`);
      const{setIsLoggedIn}=useContext(AuthContext)
      const onSubmit=async(data)=> {
        console.log(data)
       const response= await postData(data)
       console.log(response,'line 37')
       if(response?.status===true){
        Cookies.set("userInfo",JSON.stringify(response?.cookies?.userInfo), { expires: 7 });
        setIsLoggedIn(true)
        navigate('/dashboard')
       }
      
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
                      <FormControl>
                        <div className="relative w-full">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="pr-10" // Ensure space for the button
                            {...field}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-1"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </Button>
                        </div>
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
