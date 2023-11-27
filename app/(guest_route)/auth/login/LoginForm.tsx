"use client";
import Input from "@/components/inputs/inputs";
import React, { FormEventHandler, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { signIn } from "next-auth/react";

import { loginUser } from "@/context/auth/login";
import { useAuth } from "@/context/auth/AuthInfo";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userInfo;
  const { state, dispatch } = useAuth();
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
  const onsubmit: SubmitHandler<FieldValues> = async (userInfo) => {
   
    try {
      await loginUser(userInfo, dispatch);
    } catch (err) {
      setError(error);
    }
  };
  return (
 
      <>
        {error ? <div>hhhh</div> : null}
        <Input
          id="email"
          label="Email Address"
          value={email}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
          register={register}
          errors={errors}
          disabled={isLoading}
          required
        />
        <Input
          id="password"
          label="Password"
          value={password}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
          register={register}
          errors={errors}
          disabled={isLoading}
          required
        />

        <button
          onClick={handleSubmit(onsubmit)}
          className="w-[100%] text-lg mt-6 h-[48px] bg-[#181818] text-white rounded mb-4"
        >
          {isLoading ? "Loading" : "Login"}
        </button>
      </>
      
 
    
  );
};

export default LoginForm;
