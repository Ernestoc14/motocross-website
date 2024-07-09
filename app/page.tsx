import { MotoList } from "@/components/MotoList";
import { getMotoData } from "@/lib/actions/motos.action";

export default async function Home() {
  const Yamaha = { Make: "Yamaha", Model: "yz125" };
  const Kawasaki = { Make: "Kawasaki", Model: "kx250" };

  const dataYamaha = await getMotoData(Yamaha);
  const dataKawasaki = await getMotoData(Kawasaki);
  const allMotos = [...dataYamaha, ...dataKawasaki];

  return (
    <main>
      {/* <Hero /> */}
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-conteiner">
          <h1 className="text-4xl font-extrabold">Motocross Catalogue</h1>
          <p>Discover the best motocross bikes for rent/buy in your area.</p>
        </div>

        {/* Multiple Items */}
        {allMotos.length > 0 ? (
          <section>
            <div className="home__motos-wrapper">
              <MotoList moto={dataYamaha} />
              <MotoList moto={dataKawasaki} />
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops no results</h2>
            <p>{allMotos}</p>
          </div>
        )}
      </div>
    </main>
  );
}
