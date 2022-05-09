import React from "react";
import { shallow } from "enzyme";

import Layout from "../src/components/common/layout/Layout";

describe("Layout component", () => {
  it("mounts without crashing", () => {
    const wrapper = shallow(<Layout />);
    wrapper.unmount();
  });
});
