import React, { useState, useEffect } from "react";
import "./header.css";
import netflix from "../../assets/netflix.png";
import SearchIcon from "@mui/icons-material/Search";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { listClasses } from "@mui/material";
function Header() {
  const [blockage, setBlockage] = useState(false);
  const [dropdown, setDropdown] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Select Genre");

  const items = [
    { label: "Tv Shows", id: "Tv" },
    { label: "Netflix Originals", id: "Netflix" },
    { label: "Trending Movies", id: "Trending" },
    { label: "Top Movies", id: "Top" },
    { label: "Action Movies", id: "Action" },
    { label: "Romance Movies", id: "Romance" },
    { label: "Comedy Movies", id: "Comedy" },
    { label: "Horror Movies", id: "Horror" },
    { label: "Documentaries", id: "Document" },
  ];

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsVisible((prev) => !prev); // Show/hide dropdown
    setIsOpen((prev) => prev); // Close menu when hiding
    setSelectedItem("Select Genre");
  };
  const setopen = () => {
    setIsOpen((prev) => !prev);
  };

  const setblock = () => {
    setBlockage((prev) => !prev);
    setDropdown(true);
  };

  // Select an option and navigate to the section

  const handleSelect = (item) => {
    setSelectedItem(item.label);
    setIsOpen(false);
    // scrollToElementById(item.id, 1500);
    const section = document.getElementById(item.id);
    if (section) {
      // section.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // toggle header interactivity will be set here

  const togglingheader = () => {
    if (dropdown) {
      setDropdown(false);
      setBlockage(true);
    } else {
      setDropdown(true);
      setBlockage(false);
    }
  };

  /*// To create filckering effect on the search box
  // const [visible, setShowText] = useState(true);
  // useEffect(() => {
  //   const flickerInterval = setInterval(() => {
  //     setShowText((prev) => !prev);
  //   }, 400); // Flicker every 500ms

  //   return () => clearInterval(flickerInterval); // Cleanup
  // }, []);

  // class attribute for the div 

  // className={` selected-text ${
  //                           visible && !isOpen ? "visible" : "hidden"
  //                         }`}
  //                         onClick={setopen}*/

  return (
    <>
      <nav className="headerbox">
        {/* overlay div for the easily closing dropdowns */}
        <div className={blockage ? "blockage" : ""} onClick={setblock}></div>
        <div className={isOpen ? "overlayy" : ""} onClick={setopen}></div>
        <div className="headerin">
          <div className="first">
            <img src={netflix} alt="" />
            {""}
          </div>
          <ul className={`to ${!dropdown ? "toggled" : ""}`}>
            <li class="lists logo" onClick={togglingheader}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="27px"
                viewBox="0 -960 960 960"
                width="27px"
                fill="#e8eaed"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </li>
            <li className="lists addi">Netflix</li>
            <li className="lists addi">Home</li>
            <li className="lists addi">Tvshows</li>
            <li className="lists addi">Movies</li>
            <li className="lists addi">Latest</li>
            <li className="lists addi">MyList</li>
            <li className="lists addi ">Browse by Languages</li>
          </ul>
          <div className="third">
            <ul>
              <div className="upp">
                {!isVisible ? (
                  <li
                    className={!dropdown ? "search" : ""}
                    onClick={toggleDropdown}
                  >
                    <SearchIcon />
                  </li>
                ) : (
                  <div className={`dropone ${!dropdown ? "search" : ""}`}>
                    <div
                      className={`select ${isOpen ? "select-clicked" : ""}`}
                      onClick={setopen}
                    >
                      <div className="selected">{selectedItem}</div>
                      <div
                        className={isOpen ? "iconn iconn-rotate " : "iconn"}
                      ></div>
                      <SearchIcon
                        className="iconnw"
                        onClick={(e) => {
                          if (!isOpen) e.stopPropagation(); // Stops click from affecting parent .select
                          toggleDropdown();
                        }}
                      />
                    </div>

                    <ul className={`menu ${isOpen ? "menu-open" : ""}`}>
                      {items.map((item) => (
                        <li
                          key={item.id}
                          className={`list ${
                            selectedItem === item.label ? "active" : ""
                          }`}
                          onClick={() => handleSelect(item)}
                        >
                          {item.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <label
                htmlFor="sidebar"
                className={`opensidebar ${!dropdown ? "openoverride" : ""}`}
                onClick={togglingheader}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32px"
                  viewBox="0 -960 960 960"
                  width="32px"
                  fill="#e8eaed"
                >
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              </label>
              <li className="lists">
                <AccountBoxIcon />
              </li>
              <li className="lists">
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
