import type { Ref } from 'react';
import type { ShocardProps } from './Shocard';
import logo from '../assets/react.svg';

type ModalShoeProps = {
  dialogRef: Ref<HTMLDialogElement>;
};

const ModalShoe = ({
  name,
  size,
  color,
  type,
  price,
  dialogRef,
}: ShocardProps & ModalShoeProps) => {
  const handleClosing = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      e.currentTarget.close();
    }
  };
  return (
    <>
      <dialog
        className="m-auto p-3 md:p-5 rounded-sm w-60 md:w-120"
        ref={dialogRef}
        onClick={handleClosing}
      >
        <img src={logo} className="w-full h-40" />
        <div className="grid grid-cols-2">
          <h1 className="col-span-2">{name}</h1>
          <h3>Size: {size}</h3>
          <h3 className="justify-self-end">Type: {type}</h3>
          <h3>Color: {color}</h3>
          <h2 className="justify-self-end ">Price: {price}</h2>
        </div>
        <div className="text-center border-2 rounded-sm m-1">
          <button>Add to cart</button>
        </div>
      </dialog>
    </>
  );
};

export default ModalShoe;
