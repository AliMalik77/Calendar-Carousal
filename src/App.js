import React from "react";
import Layout from "./components/common/layout/Layout";
import { Calendar } from "./pages/Calendar";
const App = () => {
  return (
    <>
      <Layout>
        <Calendar />
      </Layout>
    </>
  );
};

export default App;
