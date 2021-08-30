import React from "react";
import { BrowserRouter as Router,Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center">
      <ul className=" flex navbar-nav ms-auto mb-lg-0 bg-gray-200 px-96 py-5">
        <li className="nav-item nav-link sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-3 text-red-500">
          <Link to="/Calculator">Calculator</Link>
        </li>
        <li className="nav-item nav-link sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-3 text-green-500">
          <Link to="/Todos">Todos</Link>
        </li>
        <li className="nav-item nav-link sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-3 text-blue-500">
          <Link to="/quotes">Random-Quote</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
