import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book or rent a moto -- quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your moto rental experience with our efforless booking
          process.
        </p>
        <CustomButton
          title={"Book a Moto"}
          containerStyles="bg-orange-400 text-white rounded-full mt-10"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/motoArena.jpeg"
            alt="hero"
            fill
            className="object-contain"
          />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
