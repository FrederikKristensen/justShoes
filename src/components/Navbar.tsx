import { NavLink } from 'react-router';
import { FaShoppingBasket } from 'react-icons/fa';

const Navbar = () => {
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
        <div className="text-blue-500 text-xl">
          <NavLink className="flex items-center" to="/basket" end>
            <FaShoppingBasket className="m-1" />
            Basket
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
