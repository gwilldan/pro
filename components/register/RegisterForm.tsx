"use client";
import React from "react";
import { useState,useEffect } from "react";
import Input from "@/components/inputs/inputs";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/buttons/Button";
import axios from "axios";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import goggle from "../../assets/google.png"
import Image from "next/image"
const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  
  const router = useRouter();
  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post('/api/register', data)
      .then(() => {
        toast.success("Account Created", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        }).then((callback) => {
          if (callback?.ok) {
           
            router.push("/profile");
            router.refresh();
            toast.success("Logged In", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
          if (callback?.error) {
            toast.error(callback.error);
          }
        });
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      
      <Input
        id="name"
        label="Name"
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
      <button onClick={()=>{signIn('google')}} className="w-[100%] flex justify-center gap-[11px] items-center text-lg h-[48px] border-[1px] border-[#181818] text-[#181818] rounded ">
          <Image src={goggle} width={16} height={16} alt="google" />
      <h5>    Sign Up with Google</h5>
        </button>

     
    </>
  );
};

export default RegisterForm;
