"use client"
import Image from "next/image";

export default function ClientMotoImage({ image }: { image: { link: string } }) {
  return (
    <div className="w-full h-full absolute">
      <Image
        src={image.link}
        alt="Moto Image"
        layout="fill"
        sizes="(min-width: 808px) 50vw, 100vw"
        className="object-contain"
      />
    </div>
  );
}
