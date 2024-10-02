import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => (
  <nav className="bg-gray-800 text-white p-7 flex justify-between items-center">
    <h1 className="text-2xl text-center">Shoping Mart</h1>
    <div className="grid grid-cols-2 gap-8">
      <Link to="/" className="text-xl ">
        Products
      </Link>
      <Link to="/cart" className="cursor-pointer text-xl">
        Cart ({cartCount})
      </Link>
    </div>
  </nav>
);

export default Navbar;
