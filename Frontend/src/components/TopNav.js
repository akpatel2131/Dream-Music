import React, { useRef } from "react";
import { IconSearch, IconMenu } from "@tabler/icons-react";
import "./top-nav.css";

function TopNav({ isMobile, setToggleSidenav, setTitleQuery }) {
  const innerRef = useRef();
  return (
    <nav className="top-nav">
      {isMobile && (
        <>
          <span className="companyName">
            <span className="dream">Dream</span>Music
          </span>
          <IconMenu onClick={() => setToggleSidenav((prev) => !prev)} />
        </>
      )}
      <ul>
        <li>
          <a href="/page">Music</a>
        </li>
        <li>
          <a href="/page">Podcast</a>
        </li>
        <li>
          <a href="/page">Live</a>
        </li>
        <li>
          <a href="/page">Radio</a>
        </li>
      </ul>
      <div className="search-bar">
        <input type="search" placeholder="Search" ref={innerRef} />
        <IconSearch
          className="search-icon"
          size={24}
          onClick={() => setTitleQuery(innerRef.current.value)}
        />
      </div>
    </nav>
  );
}

export default TopNav;
