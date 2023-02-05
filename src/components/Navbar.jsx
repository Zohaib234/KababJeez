import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4">
      <div className="font-medium text-lg">My Site</div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="  xl:hidden sm:block"
      >
        Menu
      </button>
      <ul className={` sm:${isOpen ? "block" : "hidden"} xl:flex`}>
        <li className="mr-6 hover:text-orange-400 border-solid to-black">
          <a href="#">Home</a>
        </li>
        <li className="mr-6">
          <a href="#">About</a>
        </li>
        <li className="mr-6">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
