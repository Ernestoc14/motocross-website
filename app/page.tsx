import { getMotoData } from "@/lib/actions/motos.action";

// export async function getMotoData() {
//   const url =
//     "https://motorcycles-by-api-ninjas.p.rapidapi.com/v1/motorcycles?make=Kawasaki&model=Ninja";
//   const options = {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": "7f84114117msh60749b07331b46ep1a4c46jsn837104533757",
//       "x-rapidapi-host": "motorcycles-by-api-ninjas.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// }

export default async function Home({ motoData }: any) {
  const data = await getMotoData();
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
      <div className="grid grid-cols-2 justify-center gap-4 w-1/3 mx-auto">
        {data.slice(0, 6).map((moto: any) => (
          <div key={moto.model}>
            <div className="text-xl">{moto.make}</div>
            <div className="text-xl">{moto.model}</div>
            <div className="text-xl">{moto.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
