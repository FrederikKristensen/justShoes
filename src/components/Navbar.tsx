import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <nav>
      <div className="grid grid-cols-3 p-2 font-bold">
        <NavLink to="/" end>
          JustShoes
        </NavLink>
        <NavLink to="/admin" end>
          Admin
        </NavLink>
        <NavLink to="/basket" end>
          Basket
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
