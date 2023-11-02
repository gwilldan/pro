"use client";
import React from "react";
import { useState, useEffect } from "react";
import Input from "@/components/inputs/inputs";

import goggle from "../../../../assets/google.png";
import Image from "next/image";
const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);


  return (
    <>
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
    
        required
      />
      <Input
        id="email"
        label="email"
        disabled={isLoading}
    
        type="email"
      
   
      />

    
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
       
        required
        type="password"
      />

      <button
      
        className="w-[100%] text-lg mt-6 h-[48px] bg-[#181818] text-white rounded mb-4"
      >
        {isLoading ? "Loading" : "Sign up"}
      </button>
      <button
       
        className="w-[100%] flex justify-center gap-[11px] items-center text-lg h-[48px] border-[1px] border-[#181818] text-[#181818] rounded "
      >
        <Image src={goggle} width={16} height={16} alt="google" />
        <h5> Sign Up with Google</h5>
      </button>
    </>
  );
};

export default RegisterForm;
