export function MotoList({ data }: any): JSX.Element {
  const motoData = Array.isArray(data) ? data : data.items || [];
  return (
    <div className="grid grid-cols-2 justify-center gap-4 w-1/3 mx-auto">
      {motoData.slice(0, 3).map((moto: any) => (
        <div key={moto.articleCompleteInfo.articleID}>
          <h2 className=" bg-gray-500">{moto.articleCompleteInfo.makeName}</h2>
          <p className=" bg-green-700">{moto.articleCompleteInfo.modelName}</p>
        </div>
      ))}
    </div>
  );
}
