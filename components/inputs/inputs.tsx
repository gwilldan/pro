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
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  required,
  register,
  errors,
}) => {
  // Regular expression for email validation
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  return (
    <div className="w-full relative">
      <label className="mb-2 text-base" htmlFor={id}>
        {label}
        {required && <sup>*</sup>}
      </label>
      <input
        autoComplete="off"
        id={id}
        disabled={disabled}
        {...register("email", {
          required: required ? 'This field is required' : false,
          pattern: {
            value: emailRegex,
            message: 'Invalid email address',
          },
        })}
        placeholder=""
        type={type}
        className={`sm:h-[48px] h-[42px] pl-2 outline-none w-[100%] border-[1px] border-[#000000] rounded-lg disabled:opacity-70 disabled:cursor-not-allowed ${
          errors[id] ? "border-rose-400" : "border-#181818"
        } ${errors[id] ? "focus:border-rose-400" : "focus:border-#181818" }`}
      />
      {errors[id] && (
        <span className="text-red-500 text-sm">{errors.email?.message}</span>
      )}
    </div>
  );
};

export default Input;