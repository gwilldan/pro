"use client";
import React from "react";
import { useState } from "react";
import Input from "@/components/inputs/inputs";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import goggle from "@/assets/google.png";
import Image from "next/image";
const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();
  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);
      if (callback?.ok) {
        router.push("/submission");
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
  };
  return (
    <div className="pt-20">
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

     
        <button
          onClick={handleSubmit(onsubmit)}
          className="w-[100%] text-lg h-[48px] mt-6 bg-[#181818] text-white rounded mb-4"
        >
          {isLoading ? "Loading" : "Login"}
        </button>
        <button
          onClick={() => {
            signIn("google");
          }}
          className="w-[100%] flex justify-center gap-[11px] items-center text-lg h-[48px] border-[1px] border-[#181818] text-[#181818] rounded "
        >
          <Image src={goggle} width={16} height={16} alt="google" />
          <h5> Login with Google</h5>
        </button>
     
    </div>
  );
};

export default LoginForm;