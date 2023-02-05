import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 bottom-0 position-absolute w-full">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">Copyright &copy; 2022 My Site</p>
        <div className="flex">
          <a href="#" className="px-3 py-2 hover:text-gray-400">
            About
          </a>
          <a href="#" className="px-3 py-2 hover:text-gray-400">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
