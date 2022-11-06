import React, { useState } from "react";
import "./Navbar.scss";
import { Search, Notifications, ArrowDropDown } from "@mui/icons-material";
import harish from "../../Assets/harish.jpg";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset > 0 ? true : false  );
    }
  return (
    <div className={isScrolled? "Navbar Scrolled" : "Navbar"}>
      <div className="Navbar-Container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/120px-Netflix_2015_logo.svg.png?20190206123158"
            alt=""
          ></img>
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icons" />
          <span>Kid</span>
          <Notifications className="icons" />
          <img src={harish} alt="" />
          <div className="profile">
            <ArrowDropDown className="icons" />
            <div className="options">
              <span>Settings</span>
              <span>Log out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
