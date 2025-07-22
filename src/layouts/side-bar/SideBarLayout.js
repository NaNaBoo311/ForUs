// SideBarLayout.js
import React, { useState } from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

export default function SideBarLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SideBar isOpen={isSidebarOpen} />
      <main style={{ flex: 1, padding: "20px", position: "relative" }}>
        <Outlet />
      </main>
    </div>
  );
}
