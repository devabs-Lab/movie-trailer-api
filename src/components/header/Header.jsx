import React from "react";
import "./header.css";
import netflix from "../../assets/netflix.png";
import SearchIcon from "@mui/icons-material/Search";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
function Header() {
  return (
    <>
      <div className="headerbox">
        <div className="headerin">
          <div className="first">
            <img src={netflix} alt="" />
            {""}
          </div>
          <ul>
            <li className="lists">Netflix</li>
            <li className="lists">Home</li>
            <li className="lists">Tvshows</li>
            <li className="lists">Movies</li>
            <li className="lists">Latest</li>
            <li className="lists">MyList</li>
            <li className="browser lists">Browse by Languages</li>
          </ul>
          <div className="third">
            <ul>
              <li className="">
                <SearchIcon />
              </li>
              <li className="">
                <AccountBoxIcon />
              </li>
              <li className="">
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
