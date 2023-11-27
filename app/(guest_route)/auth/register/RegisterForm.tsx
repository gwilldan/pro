
"use client";
import React, { useEffect } from "react";
import { useState} from "react";
import Input from "@/components/inputs/inputs";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import goggle from "@/assets/google.png";
import Image from "next/image"
import { useAuth } from "@/context/auth/AuthInfo";
import { registerUser } from "@/context/auth/signup";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  });
  const { state , dispatch } = useAuth();
  const router = useRouter();
  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data)
    try {
      registerUser(data, dispatch);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }finally{
        setIsLoading(false);
  };
}
 
<<<<<<< HEAD:app/auth/registerr/RegisterForm.tsx
=======

>>>>>>> beeae3eed79b7105c0e7bfa75038bca0befd63c2:app/(guest_route)/auth/register/RegisterForm.tsx
  return (
    <div className="">
      
      <Input
        id="firstname"
        label="FirstName"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="lastname"
        label="LastName"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="email"
        label="email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="email"
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />

      <button onClick={handleSubmit(onsubmit)} className="w-[100%] text-lg mt-6 h-[48px] bg-[#181818] text-white rounded mb-4">
      {isLoading ? "Loading" : "Sign up"}
        </button>
      <button 
     // onClick={()=>verify_token(state , dispatch)}
       className="w-[100%] flex justify-center gap-[11px] items-center text-lg h-[48px] border-[1px] border-[#181818] text-[#181818] rounded ">
          <Image src={goggle} width={16} height={16} alt="google" />
      <h5>    Sign Up with Google</h5>
        </button>

     
    </div>
  );
};

export default RegisterForm;