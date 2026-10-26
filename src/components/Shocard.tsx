type ShocardProps = {
  id: number;
  type: string;
  size: number;
  color: string;
  price: number;
};

const Shocard = ({ id, type, size, color, price }: ShocardProps) => {
  return (
    <div>
      <p>Id: {id} </p>
      <p>Type: {type}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>
      <p>Price: {price}</p>
    </div>
  );
};

export default Shocard;
