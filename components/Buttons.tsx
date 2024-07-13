"use client"

import CustomButton from "./CustomButton";
import { handleButtonClick } from "@/lib/actions/motos.action";

const Buttons = ({
  makeName,
  modelName,
}: {
  makeName: string;
  modelName: string;
}) => {
  return (
    <div className="relative flex flex-col gap-3 w-full my-10">
      <div className="moto-card__btn-container bottom-0">
        <CustomButton
          title="Book"
          containerStyles="w-full py-[16px] rounded-full bg-orange-400"
          textStyles="text-white text-[14px] leading-[17px] font-bold"
          rightIcon="/right-arrow.svg"
          handleClick={() => handleButtonClick(makeName, modelName)}
        />
      </div>
      <div className="moto-card__btn-container pt-1">
        <CustomButton
          title="Buy"
          containerStyles="w-full py-[16px] rounded-full bg-orange-400"
          textStyles="text-white text-[14px] leading-[17px] font-bold"
          rightIcon="/right-arrow.svg"
          handleClick={() => handleButtonClick(makeName, modelName)}
        />
      </div>
    </div>
  );
};

export default Buttons;
