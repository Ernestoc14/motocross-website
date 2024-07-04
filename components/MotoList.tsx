import { MotoImage } from "./MotoImage";
import { getMotoImage } from "@/lib/actions/motos.action";

export function MotoList({ data }: any): JSX.Element {
  const motoData = Array.isArray(data) ? data : data.items || [];

  return (
    <div className="grid grid-cols-2  gap-4 md:grid-cols-4 justify-center w-1/3 mx-auto">
      {motoData.slice(0, 4).map((moto: any) => (
        <div key={moto.articleCompleteInfo.articleID}>
          <h2 className=" bg-gray-500">{moto.articleCompleteInfo.makeName}</h2>
          <p className=" bg-green-700">{moto.articleCompleteInfo.modelName}</p>
          <MotoImage articleID={moto.articleCompleteInfo.articleID}/>
        </div>
      ))}
    </div>
  );
}
