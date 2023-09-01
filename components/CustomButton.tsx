"use client";
import { CustomButtonProps } from "@/types";
import { ButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`px-6 py-3 rounded-[5px] text-[14px] ${containerStyles}`}
      onClick={() => handleClick()}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
