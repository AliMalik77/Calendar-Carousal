import React from "react";
import Layout from "./components/common/layout/Layout";
import { Calendar } from "./pages/Calendar";

const App = () => {
  return (
    <>
      <Layout>
        <Calendar disableDates={["2021-02-03", "2021-02-04"]} />
      </Layout>
    </>
  );
};

export default App;
