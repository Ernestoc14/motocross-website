import { MotoList } from "@/components/MotoList";
import { getMotoData } from "@/lib/actions/motos.action";

export default async function Home() {
  const Yamaha = { Make: "Yamaha", Model: "yz125" };
  const Kawasaki = { Make: "Kawasaki", Model: "kx250" };

  const dataYamaha = await getMotoData(Yamaha);
  const dataKawasaki = await getMotoData(Kawasaki);

  console.log(dataYamaha);
  // console.log(dataHonda);
  return (
    <div className="h-screen">
      <h1 className="text-4xl text-center mt-14 font-bold">Hello World</h1>
      <div className="flex flex-col justify-center items-center h-1/3">
        <div className="text-xl"> Server Action Info</div>
        <button className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-4">
          Get Data
        </button>
      </div>
      {/* Multiple Items */}
      <MotoList data={dataYamaha} />
      <MotoList data={dataKawasaki} />
    </div>
  );
}
