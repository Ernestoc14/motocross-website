import Image from "next/image";
import { getMotoImage } from "@/lib/actions/motos.action";

export async function MotoImage({ articleID }: { articleID: number }) {
  const image = await getMotoImage({ articleID });
  return (
    <div className="bg-white overflow-hidden">
      <Image src={image.link} alt="Moto Image" width={264} height={264} className="object-cover w-full h-full"/>
    </div>
  );
}
