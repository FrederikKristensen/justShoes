const Basket = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2 mx-1 mt-1 p-4 rounded-xl bg-gray-200">
        <div className="font-semibold">Products in basket:</div>
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <p>Picture</p>
            <p>Name</p>
            <p>Type, Size, Color</p>
          </div>
          <div>Price</div>
        </div>
      </div>
      <div className="mx-1 mt-1 p-3 rounded-xl bg-gray-200">Total price:</div>
    </div>
  );
};

export default Basket;
