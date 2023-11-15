"use client";

import { FieldValues, FieldErrors, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>; // Provide a type annotation
  errors: FieldErrors; // Correct the typo: FieldErrors instead of FieldsErrors
  value?:string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Add onChange prop


}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  required,
  register,
  errors,
  value,
  onChange
}) => {
  return (
    <div className="w-full relative " >
      <label className="mb-2 text-base" htmlFor={id}>{label}<sup>*</sup></label>
      <input
        autoComplete="off"
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=""
        type={type}
        value={value}
        onChange={onChange}
        className={`   className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%]  border-[1px] border-[#000000] rounded-lg disabled:opacity-70 disabled:cursor-not-allowed ${
          errors[id] ? "border-rose-400" : "border-#181818"
        } ${errors[id] ? "focus:border-rose-400" : "focus:border-#181818" }`}

      />
      
    </div>
  );
};

export default Input;