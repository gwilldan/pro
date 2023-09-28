"use client";
import React from "react";
import { useState } from "react";
import Input from "@/components/inputs/inputs";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/buttons/Button";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
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
   signIn('credentials',{
    ...data,
    redirect:false
   }).then((callback)=>{
    setIsLoading(false)
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
    }if (callback?.error) {
      toast.error(callback.error);
    }
   })
  };
  return (
    <>

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
      <Button onClick={handleSubmit(onsubmit)}>
        {isLoading ? "Loading" : "Signup"}
      </Button>
    </>
  );
};

export default LoginForm;
