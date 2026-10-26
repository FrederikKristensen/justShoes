type ShocardProps = {
  type: string;
  size: number;
  color: string;
  price: number;
};

const Shocard = ({ type, size, color, price }: ShocardProps) => {
  return (
    <div className="bg-gray-400 rounded-md grid grid-cols-2 px-3 py-1">
      <h1>Name</h1>
      <h3 className="whitespace-nowrap justify-self-end ">Size: {size}</h3>
      <h3 className="whitespace-nowrap col-span-2">Type: {type}</h3>
      <h3 className="whitespace-nowrap">Color: {color}</h3>
      <h2 className="whitespace-nowrap justify-self-end ">Price: {price}</h2>
    </div>
  );
};

export default Shocard;
