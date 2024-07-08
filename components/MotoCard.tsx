import { MotoProps } from "@/types";
import { MotoImage } from "./MotoImage";

interface MotoCardProps {
  moto: MotoProps;
}
const MotoCard = ({ moto }: MotoCardProps) => {
  const priceNamne = moto.articleCompleteInfo.priceName || ""
  const priceMatch = priceNamne.match(/(\d+)/);
  const price = priceMatch ? priceMatch[0] : "6649";

  return (
    <div className="moto-card group">
      <div className="moto-card__content">
        <h2 className="moto-card__content-title">
          {moto.articleCompleteInfo.makeName}{" "}
          {moto.articleCompleteInfo.modelName}
        </h2>
      </div>
      <p className="flex mt-6 text-[20px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {price}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <MotoImage articleID={moto.articleCompleteInfo.articleID} />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-[14px]">
              {/* {transmission === "a" ? "Automatic" : "Manual"} */}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2"></div>
          <div className="flex flex-col justify-center items-center gap-2"></div>
        </div>
        <div className="moto-card__btn-container">
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
