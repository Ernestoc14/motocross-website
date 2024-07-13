import { MotoProps } from "@/types";
import { MotoImage } from "./MotoImage";
import Buttons from "./Buttons";

interface MotoCardProps {
  moto: MotoProps;
}
const MotoCard = ({ moto }: MotoCardProps) => {
  const priceNamne = moto.articleCompleteInfo.priceName || "";
  const priceMatch = priceNamne.match(/(\d+)/);
  const price = priceMatch ? priceMatch[0] : "6649";
  const makeName = moto.articleCompleteInfo.makeName;
  const modelName = moto.articleCompleteInfo.modelName;

  return (
    <div className="moto-card group overflow-hidden">
      <div className="moto-card__content">
        <h2 className="moto-card__content-title">
          {makeName} {modelName}
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
      <Buttons makeName={makeName} modelName={modelName} />
    </div>
  );
};

export default MotoCard;
