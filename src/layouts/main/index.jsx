import React from "react";
import Footer from "../footer";
import Header from "../header.jsx";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  );
};

export default MainLayout;