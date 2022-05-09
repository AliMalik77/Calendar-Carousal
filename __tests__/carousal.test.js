import React from "react";
import { shallow } from "enzyme";

import { Carousal } from "../src/components/common/carousal/Carousal";

describe("Carousal component", () => {
  it("mounts without crashing", () => {
    const wrapper = shallow(<Carousal />);
    wrapper.unmount();
  });
});
