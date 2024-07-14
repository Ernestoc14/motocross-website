"use client";

import CustomButton from "./CustomButton";
// import { toast } from "sonner";
import { toast } from "react-hot-toast";

const Buttons = ({
  makeName,
  modelName,
}: {
  makeName: string;
  modelName: string;
}) => {
  async function handleButtonClick(makeName: string, modelName: string) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({ makeName: makeName, modelName: modelName });
    var requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        "https://2t69hj7kyd.execute-api.us-west-2.amazonaws.com/dev",
        requestOptions
      );
      const result = await response.json();
      console.log(result.body);
      toast.success(result.body, {
        duration: 3000,
        position: "top-center",
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    } catch (error) {
      console.log("error", error);
    }
  }

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
