import MotoCard from "./MotoCard";
import { MotoListProps } from "@/types";

export function MotoList({ moto }: MotoListProps): JSX.Element {
  const motoData = Array.isArray(moto) ? moto : [];

  return (
    <div className="flex flex-col gap-10 justify-center">
      {motoData.slice(0, 4).map((moto) => (
        <MotoCard key={moto.articleCompleteInfo.articleID} moto={moto} />
      ))}
    </div>
  );
}
