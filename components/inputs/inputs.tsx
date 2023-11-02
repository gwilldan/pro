"use client";

import { FieldValues, FieldErrors, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  required,

}) => {
  return (
    <div className="w-full relative " >
      <label className="mb-2 text-base" htmlFor={id}>{label}<sup>*</sup></label>
      <input
        autoComplete="off"
        id={id}
        disabled={disabled}
        
        placeholder=""
        type={type}
        className=' className="absolute sm:top-[18px] top-[12px] right-2 cursor-pointer text-[#808080] disabled:opacity-70 disabled:cursor-not-allowed'
      />
      
    </div>
  );
};

export default Input;