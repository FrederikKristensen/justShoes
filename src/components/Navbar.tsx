import { NavLink } from 'react-router';
import { FaShoppingBasket } from 'react-icons/fa';
import { useBasketContext } from '../context/BasketContext';

const Navbar = () => {
  const { basket } = useBasketContext();

  function countBasket() {
    const count = basket.length;
    return count;
  }

  return (
    <nav>
      <div className="grid grid-cols-3 p-2 font-bold text-center">
        <div className="text-blue-600 text-3xl">
          <NavLink to="/" end>
            JustShoes
          </NavLink>
        </div>
        <NavLink to="/profile" end>
          Profile
        </NavLink>
        <div className="relative text-blue-500 text-xl">
          <NavLink className="flex items-center" to="/basket" end>
            <FaShoppingBasket className="m-1" />
            {countBasket() > 0 && (
              <div className="absolute bottom-2 bg-red-700 w-3 h-3 rounded-4xl text-white text-[10px]">
                {countBasket()}
              </div>
            )}
            Basket
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
