import React from "react";

import { SiFlipkart } from "react-icons/si";
import { AiFillAmazonSquare } from "react-icons/ai";
import { FaSnapchat } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* <span>GET IN ONE</span> */}
        <ul className="navbar-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>

      <SiFlipkart className="react-icons-flipkart" />
      <AiFillAmazonSquare className="react-icons-amazon" />
      <FaSnapchat className="react-icons-snapdeal" />

      <div className="navbar-search">
        <input type="text" placeholder="Search products" />
        <button type="submit">Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
