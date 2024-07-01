import React, { useState, useEffect } from "react";
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";
import Home from "./pages/Home";
import UltimatePage from "./pages/UlitmatePage";
import LoginAndRegister from "./pages/LoginAndRegister";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayBox from "./components/PlayBox";
import { useWindowSize } from "react-use";
import axios from "axios";
import ipConfig from "./ipConfig.json";
import "./App.css";

function PageContent() {
  const [selectedSongs, setSelectedSongs] = useState({});
  const { width } = useWindowSize();
  const isMobile = width < 960;
  const [toggleSidenav, setToggleSidenav] = useState(!isMobile);
  const [data, setData] = useState([]);
  const [titleQuery, setTitleQuery] = useState("");

  useEffect(() => {
    let path = `${ipConfig.endpoint}/api/music`;
    if (titleQuery) path = `${ipConfig.endpoint}/api/music?title=${titleQuery}`;

    axios
      .get(path, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        setData(response.data);
      });
  }, [titleQuery]);

  return (
    <>
      <SideNav
        toggleSidenav={toggleSidenav}
        isMobile={isMobile}
        setToggleSidenav={setToggleSidenav}
      />
      <div className="main-content">
        <TopNav
          isMobile={isMobile}
          setToggleSidenav={setToggleSidenav}
          setTitleQuery={setTitleQuery}
        />
        <Routes>
          <Route
            path="/home"
            element={<Home setSelectedSongs={setSelectedSongs} data={data} />}
          />
          <Route path="/page" element={<UltimatePage />} />
        </Routes>
      </div>
      <PlayBox songs={selectedSongs} />
    </>
  );
}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginAndRegister type="login" />} />
          <Route path="/login" element={<LoginAndRegister type="login" />} />
          <Route
            path="/register"
            element={<LoginAndRegister type="register" />}
          />
          <Route path="/*" element={<PageContent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
