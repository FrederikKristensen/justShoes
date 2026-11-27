import { useRef } from 'react';
import ModalShoe from './ModalShoe';

export type ShocardProps = {
  id: number;
  name: string;
  type: string;
  size: number;
  color: string;
  price: number;
  image: string;
};

const Shocard = ({ id, name, type, size, color, price, image }: ShocardProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  return (
    <>
      <button onClick={() => dialogRef.current?.showModal()}>
        <div className="bg-gray-400 rounded-md px-3 py-1 min-w-40">
          <div className="relative">
            <img src={image} className="w-full h-25 object-cover" />
          </div>
          <div className="grid grid-cols-2 whitespace-nowrap">
            <h1 className="col-span-2">{name}</h1>
            <h3>Size: {size}</h3>
            <h3 className="justify-self-end">Type: {type}</h3>
            <h3>Color: {color}</h3>
            <h2 className="justify-self-end ">Price: {price}</h2>
          </div>
        </div>
      </button>

      {dialogRef && (
        <ModalShoe
          dialogRef={dialogRef}
          id={id}
          name={name}
          type={type}
          size={size}
          color={color}
          price={price}
          image={image}
        />
      )}
    </>
  );
};

export default Shocard;
