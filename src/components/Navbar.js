import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav>
      <button
        data-dropdown-toggle="dropdown"
        onClick={handleClick}
        className="bg-gray-800 text-white hover:bg-gray-900 py-2 px-4 rounded-md"
      >
        Menu
      </button>
      <ul
        className={`hidden group-hover:block ${open ? "block" : "hidden"}`}
        style={open ? { marginTop: "10px" } : {}}
      >
        <li className="px-4 py-2">
          <Link>Link 1</Link>
        </li>
        <li className="px-4 py-2">
          <Link>Link 2</Link>
        </li>
        <li className="px-4 py-2">
          <Link>Link 3</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;