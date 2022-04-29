import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./layout.styles.less";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
