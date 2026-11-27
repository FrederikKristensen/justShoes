import { useBasketContext } from '../context/BasketContext';

const Basket = () => {
  const { basket, removeItem } = useBasketContext();

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
                <div className="grid grid-cols-5 pl-2 py-1">
                  <div className="pr-1">
                    <img
                      src={e.image}
                      alt={`Image of ${e.name}`}
                      className="w-full h-20 object-cover rounded-lg"
                    />
                  </div>
                  <div className="col-span-3">
                    <p>{e.name}</p>
                    <p>
                      {e.type}, {e.size}, {e.color}
                    </p>
                  </div>
                  <div className="grid grid-flow-col grid-rows-3">
                    <div
                      className="justify-self-end row-span-2 text-gray-400 hover:text-gray-900 cursor-pointer font-semibold p-1"
                      onClick={() => removeItem(e)}
                    >
                      X
                    </div>
                    <div className="justify-self-end">{e.price},-</div>
                  </div>
                </div>
                <div className="h-0.5 w-5/6 bg-gray-300 rounded-full mt-2 mx-auto last:hidden" />
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
