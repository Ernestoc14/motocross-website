import Image from "next/image";
import { getMotoImage } from "@/lib/actions/motos.action";

export async function MotoImage({ articleID }: { articleID: number }) {
  const image = await getMotoImage({articleID});
  return <Image src={image.link} alt="Moto Image" width={248} height={248} />;
}
