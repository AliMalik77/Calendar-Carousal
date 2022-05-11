import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";

const { Header } = Layout;

const Navbar = () => {
  return (
    <>
      <Layout>
        <Header className="nav">Calendar Carousal</Header>
      </Layout>
    </>
  );
};

export default Navbar;
