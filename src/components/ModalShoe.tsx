import type { Ref } from 'react';
import type { ShocardProps } from './Shocard';

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
      <dialog ref={dialogRef} onClick={handleClosing}>
        <p>{name}</p>
        <p>{size}</p>
        <p>{color}</p>
        <p>{type}</p>
        <p>{price}</p>
      </dialog>
    </>
  );
};

export default ModalShoe;
