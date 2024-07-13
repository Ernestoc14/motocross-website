"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";
import { MouseEventHandler } from "react";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  const onClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (handleClick) {
      if (typeof handleClick === "function") {
        handleClick(event);
      } else {
        console.error("HandleClick is not a Function");
      }
    }
  };
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={onClickHandler}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
