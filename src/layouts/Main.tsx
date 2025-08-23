import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
