import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";

const { Header } = Layout;

const Navbar = () => {
  return (
    <>
      <Layout>
        <Header
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bolder",
            fontSize: "25px",
          }}
        >
          Calendar Carousal
        </Header>
      </Layout>
    </>
  );
};

export default Navbar;
