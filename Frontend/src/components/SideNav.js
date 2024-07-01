import React, { useState } from "react";
import {
  IconHeadphones,
  IconLogout,
  IconHome,
  IconTrendingUp,
  IconCompass,
  IconSettings,
  IconX
} from "@tabler/icons-react";
import "./side-nav.css";

function SideNav({ toggleSidenav, isMobile, setToggleSidenav }) {
  return (
    toggleSidenav && (
      <nav className="side-nav-container">
        <div className="side-nav">
          <div className="logo">
            <IconHeadphones className="icon" size={45} />
            <span className="companyName">
              <span className="dream">Dream</span>Music
            </span>
            {isMobile && <IconX  className="x-icon" size={24} onClick={() => setToggleSidenav(false)}/>}
          </div>
          <div>Menu</div>
          <ul>
            <li>
              <IconHome className="icon" size={24} />
              <a href="/home">Home</a>
            </li>
            <li>
              <IconTrendingUp className="icon" size={24} />
              <a href="/page">Trend</a>
            </li>
            <li>
              <IconHeadphones className="icon" size={24} />
              <a href="/page">Library</a>
            </li>
            <li>
              <IconCompass className="icon" size={24} />
              <a href="/page">Discovery</a>
            </li>
          </ul>
        </div>

        <div className="actionContainer">
          <div>General</div>
          <div className="action">
            <IconSettings className="icon" size={24} />
            <a href="/page">Settings</a>
          </div>
          <div className="action">
            <IconLogout className="icon" size={24} />
            <a href="/login">Logout</a>
          </div>
        </div>
      </nav>
    )
  );
}

export default SideNav;
