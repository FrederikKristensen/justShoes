import type { Ref } from 'react';
import type { ShocardProps } from './Shocard';
import { useBasketContext } from '../context/BasketContext';

type ModalShoeProps = {
  dialogRef: Ref<HTMLDialogElement>;
};

const ModalShoe = ({
  id,
  name,
  size,
  color,
  type,
  price,
  dialogRef,
  image,
}: ShocardProps & ModalShoeProps) => {
  const handleClosing = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      e.currentTarget.close();
    }
  };

  const { addToBasket } = useBasketContext();

  return (
    <>
      <dialog
        className="m-auto p-3 md:p-5 rounded-sm w-60 md:w-120"
        ref={dialogRef}
        onClick={handleClosing}
      >
        <img src={image} className="w-full h-45 object-cover rounded-lg" />
        <div className="grid grid-cols-2">
          <h1 className="col-span-2 justify-self-center">{name}</h1>
          <h3 className="justify-self-center">Size: {size}</h3>
          <h3 className="justify-self-center">Type: {type}</h3>
          <h3 className="justify-self-center">Color: {color}</h3>
          <h2 className="justify-self-center ">Price: {price}</h2>
        </div>
        <button
          onClick={() => addToBasket({ id, name, size, type, color, price, image })}
          className="w-full text-center border-2 rounded-sm m-1 cursor-pointer"
        >
          Add to cart
        </button>
      </dialog>
    </>
  );
};

export default ModalShoe;
