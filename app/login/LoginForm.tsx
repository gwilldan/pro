"use client";
import React from "react";
import { useState } from "react";
import Input from "@/components/inputs/inputs";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/buttons/Button";
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
  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
  };
  return (
    <>
      <h5>yesss</h5>
      <Button onClick={()=>{}}>Login with google</Button>
      
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
