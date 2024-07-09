import Image from "next/image";
import { getMotoImage } from "@/lib/actions/motos.action";

export async function MotoImage({ articleID }: { articleID: number }) {
  const image = await getMotoImage({ articleID });
  return (
    <div className="w-full h-full absolute">
      <Image
        src={image.link}
        alt="Moto Image"
        layout="fill"
        // priority
        // fill
        sizes="(min-width: 808px) 50vw, 100vw"
        className="object-contain"
      />
    </div>
  );
}
