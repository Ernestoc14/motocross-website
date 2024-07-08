import { MotoList } from "@/components/MotoList";
import { getMotoData } from "@/lib/actions/motos.action";

export default async function Home() {
  const Yamaha = { Make: "Yamaha", Model: "yz125" };
  const Kawasaki = { Make: "Kawasaki", Model: "kx250" };

  const dataYamaha = await getMotoData(Yamaha);
  const dataKawasaki = await getMotoData(Kawasaki);

  return (
    <main className="overflow-hidden">
      {/* <Hero /> */}
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <h1 className="text-4xl text-center mt-14 font-bold">
          Hero Component HERE
        </h1>
        <div className="border-4 border-red-700  h-1/3">HERO COMPONENT</div>
        {/* Multiple Items */}
        <div className="home__motos-wrapper">
          <MotoList moto={dataYamaha} />
          <MotoList moto={dataKawasaki} />
        </div>
      </div>
    </main>
  );
}
