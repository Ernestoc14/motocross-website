import MotoCard from "./MotoCard";

export function MotoList({ data }: any): JSX.Element {
  const motoData = Array.isArray(data) ? data : data.items || [];

  return (
    <div>
      
      <MotoCard data={motoData} />
    </div>
  );
}
