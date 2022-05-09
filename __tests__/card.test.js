import React from "react";
import { shallow } from "enzyme";

import Card from "../src/components/common/card/Card";

describe("Card component", () => {
  it("mounts without crashing", () => {
    const wrapper = shallow(<Card />);
    wrapper.unmount();
  });
});
