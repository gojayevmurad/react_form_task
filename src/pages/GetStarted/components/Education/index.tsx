import React from "react";
import { Outlet } from "react-router-dom";

const Education: React.FC = () => {
  return (
    <div className="education_stage">
      <Outlet />
    </div>
  );
};

export default Education;
