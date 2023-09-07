import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="main_layout">
      <Outlet />
    </div>
  );
};

export default MainLayout;
