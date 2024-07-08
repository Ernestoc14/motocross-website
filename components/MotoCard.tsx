import { MotoProps } from "@/types";
import { MotoImage } from "./MotoImage";
import Image from "next/image";

interface MotoCardProps {
  moto: MotoProps;
}
const MotoCard = ({ moto }: MotoCardProps) => {
  return (
    // <div className="grid grid-cols-2  gap-4 md:grid-cols-4 justify-center w-1/3 mx-auto">
    //   {moto.slice(0, 4).map((moto: any) => (
    //     <div key={moto.articleCompleteInfo.articleID}>
    //       <h2 className=" bg-gray-500">{moto.articleCompleteInfo.makeName}</h2>
    //       <p className=" bg-green-700">{moto.articleCompleteInfo.modelName}</p>
    //       <MotoImage articleID={moto.articleCompleteInfo.articleID} />
    //     </div>
    //   ))}
    // </div>
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          Honda Civic
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        55
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <MotoImage articleID={moto.articleID} />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {/* {transmission === "a" ? "Automatic" : "Manual"} */}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">ESTO NO SE QUE ES</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="text-[14px]">GALONEs</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          {/* <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          /> */}
        </div>
      </div>

      {/* <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} /> */}
    </div>
  );
};

export default MotoCard;
