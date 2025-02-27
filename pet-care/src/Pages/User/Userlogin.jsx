"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useContext } from "react";
import { loginSchema } from "../../schemas/Userlogin";
import usePost from "../../customHooks/usePost";
import Cookies from "js-cookie";
import { AuthContext } from "@/context/AuthProvider";
import { Eye, EyeOff } from "lucide-react";

const Userlogin = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { loginInput: "", password: "", otp: "" },
  });

  const handleInputChange = (event) => {
    const value = event.target.value;
    setIsPhone(/^\d{10}$/.test(value));
  };

  const URL = import.meta.env.VITE_BACKEND_URL;
  const { postData, loading, error } = usePost(`${URL}/user/user-login`);
  const onSubmit = async (values) => {
    console.log(values);
    const response = await postData(values);
    console.log(response, "line 30");
    if (response) {
      setIsLoggedIn(true);
      console.log(response, "line 31 user login");
      Cookies.set("userInfo", JSON.stringify(response?.cookies?.userInfo), {
        expires: 7,
      });
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <div className="w-4/6 mx-auto my-20">
        <div className="flex flex-col gap-4 my-20 w-3/5 mx-auto">
          <div className="text-5xl text-center font-semibold my-4 text-[#000D44]">
            Login
          </div>
          <div className="w-3/5 mx-auto my-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2 flex flex-col gap-3"
              >
                {/* Email or Phone Field */}
                <FormField
                  control={form.control}
                  name="loginInput"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Email or Phone"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            handleInputChange(e);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Password Field (Only required for email login) */}
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

                {/* OTP Field (Only required for phone login if no password) */}
                {isPhone && (
                  <FormField
                    control={form.control}
                    name="otp"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Enter OTP" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <Button
                  type="submit"
                  className="bg-[#5470ff] transition-all duration-300 focus:scale-[.95] hover:bg-[#3d53c6] shadow-btn"
                >
                  Login
                </Button>
              </form>
            </Form>
          </div>

          <div className="w-3/5 mx-auto">
            <span>New User?</span>&nbsp;
            <Link className="hover:text-blue-600" to="/sign-up">
              Register Here.
            </Link>
          </div>

          <div className="w-3/5 mx-auto">Login with Otp instead</div>
        </div>
      </div>
    </div>
  );
};

export default Userlogin;
