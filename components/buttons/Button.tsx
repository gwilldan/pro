"use client";
import { MouseEventHandler } from "react";
const getVariant = (variant?: VariantType) => {
    switch (variant) {
      case "primary":
        return "bg-[#181818] hover:bg-black text-white shadow shadow-violet-600/25 hover:shadow-violet-600/75";
    
      case "outline-primary":
        return "bg-white text-black border border-black hover:text-white hover:bg-[#181818]";
  
      default:
        return "bg-violet-500 hover:bg-violet-700 text-white shadow shadow-violet-600/25 hover:shadow-violet-600/75";
    }
  };
  
  type VariantType =
    | "primary"
    | "outline-primary";
  
  export interface IButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: React.ReactNode;
    variant?: VariantType;
    square?: boolean;
    paddingLess?: boolean;
    OnClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  }
  export const Button = ({
    className,
    children,
    variant,
    square,
    paddingLess,
    type = "button",
    onClick,
    ...props
  }: IButtonProps) => {
    return (
      <button
        {...props}
        type={type}
        onClick={onClick}

        className={`
   
          ${getVariant(variant)}  transition duration-75  ${
          !paddingLess && "px-6 py-3 text-sm"
        }  ${!square && "rounded-[5px]"} active:scale-95 ${className} `}
      >
        {children}
      </button>
    );
  };