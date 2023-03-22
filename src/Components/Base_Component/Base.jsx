import React, { useState } from "react";
import { AiFillAmazonSquare } from "react-icons/ai";
import { FaHome, FaSnapchat } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";
import { Link } from "react-router-dom";
import Amazon_Data from "../Scrapper-Data/Amazon_Data";
import Flipkart_Data from "../Scrapper-Data/Flipkart_Data";
import Snapdeal_Data from "../Scrapper-Data/Snapdeal_Data";

import "../NavBar/Navbar.css";
const Base = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar">
            <div className="navbar-logo">
              <ul className="navbar-links">
                <li>
                  <Link to={"/"}>
                    <FaHome /> Home
                  </Link>
                </li>
              </ul>
            </div>

            <SiFlipkart className="react-icons-flipkart" />
            <AiFillAmazonSquare className="react-icons-amazon" />
            <FaSnapchat className="react-icons-snapdeal" />

            <div className="navbar-search">
              <input
                type="text"
                placeholder="Search Mobiles..."
                onChange={(input) =>
                  setSearchValue(input.target.value.toLowerCase())
                }
                value={searchValue}
              />
              <button type="submit">Search</button>
            </div>
          </nav>
        </div>
      </div>
      <div className="container mt-3">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-4 All-cards-border">
              <div className="row">
                <Flipkart_Data searchValue={searchValue} />
              </div>
            </div>

            <div className="col-sm-4 All-cards-border">
              <div className="row">
                <Amazon_Data searchValue={searchValue} />
              </div>
            </div>

            <div className="col-sm-4 All-cards-border">
              <div className="row">
                <Snapdeal_Data searchValue={searchValue} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Base;
