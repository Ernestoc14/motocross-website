import { MotoProps } from "@/types";
import { MotoImage } from "./MotoImage";
import CustomButton from "./CustomButton";

interface MotoCardProps {
  moto: MotoProps;
}
const MotoCard = ({ moto }: MotoCardProps) => {
  const priceNamne = moto.articleCompleteInfo.priceName || "";
  const priceMatch = priceNamne.match(/(\d+)/);
  const price = priceMatch ? priceMatch[0] : "6649";

  return (
    <div className="moto-card group overflow-hidden">
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
      <div className="relative w-full h-40 my-5">
        <MotoImage articleID={moto.articleCompleteInfo.articleID} />
      </div>

      <div className="relative flex flex-col gap-3 w-full my-10">
        <div className="moto-card__btn-container bottom-0">
          <CustomButton
            title="Book"
            containerStyles="w-full py-[16px] rounded-full bg-orange-400"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            // handleClick={() => setIsOpen(true)}
          />
        </div>
        <div className="moto-card__btn-container pt-1">
          <CustomButton
            title="Buy"
            containerStyles="w-full py-[16px] rounded-full bg-orange-400"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            // handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default MotoCard;
