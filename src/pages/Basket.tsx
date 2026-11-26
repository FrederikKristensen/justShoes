import { useBasketContext } from '../context/BasketContext';

const Basket = () => {
  const { basket } = useBasketContext();

  function totalBasketPrice() {
    const total = basket.reduce((sum, item) => sum + item.price, 0);
    return total;
  }

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2 mx-1 mt-1 p-4 rounded-xl bg-gray-200">
        <div className="font-semibold">Products in basket:</div>
        {basket.length === 0 ? (
          <p>Your basket is empty, keep shopping</p>
        ) : (
          basket.map((e) => {
            return (
              <>
                <div className="grid grid-cols-4 pl-2">
                  <div className="col-span-3">
                    <p>Picture</p>
                    <p>{e.name}</p>
                    <p>
                      {e.type}, {e.size}, {e.color}
                    </p>
                  </div>
                  <div>{e.price} ,-</div>
                </div>
              </>
            );
          })
        )}
      </div>
      <div className="mx-1 mt-1 p-3 rounded-xl bg-gray-200">
        Total price:
        <div className="font-medium">{totalBasketPrice()},-</div>
      </div>
    </div>
  );
};

export default Basket;
