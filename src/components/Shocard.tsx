import logo from '../assets/react.svg';

type ShocardProps = {
  name: string;
  type: string;
  size: number;
  color: string;
  price: number;
};

const Shocard = ({ name, type, size, color, price }: ShocardProps) => {
  return (
    <div className="bg-gray-400 rounded-md px-3 py-1">
      <div className="relative">
        <img src={logo} className="w-full h-25 object-cover" />
      </div>
      <div className="grid grid-cols-2 whitespace-nowrap">
        <h1 className="col-span-2">{name}</h1>
        <h3>Size: {size}</h3>
        <h3 className="justify-self-end">Type: {type}</h3>
        <h3>Color: {color}</h3>
        <h2 className=" justify-self-end ">Price: {price}</h2>
      </div>
    </div>
  );
};

export default Shocard;
