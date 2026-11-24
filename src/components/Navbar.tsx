import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <nav>
      <div className="grid grid-cols-3 p-2 font-bold text-center">
        <div className="text-blue-600 text-3xl">
          <NavLink to="/" end>
            JustShoes
          </NavLink>
        </div>
        <NavLink to="/admin" end>
          Admin
        </NavLink>
        <div className="text-blue-500 text-xl">
          <NavLink to="/basket" end>
            Basket
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
