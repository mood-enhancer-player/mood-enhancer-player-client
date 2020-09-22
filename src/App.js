import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import SideBar from "./Components/SideBar/SideBar";
import Content from "./Components/content/Content";
import "./App.css";

const App = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <Router>
      <div className="App wrapper">
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
      </div>
    </Router>
  );
};

export default App;