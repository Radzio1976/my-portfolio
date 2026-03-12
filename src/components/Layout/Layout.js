import React from "react";
import Header from "../Header/Header";
import "../../styles/global.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
