import React from "react";
import { shallow } from "enzyme";

import TimePicker from "../src/components/common/timepicker/Timepicker";

describe("TimePicker component", () => {
  it("mounts without crashing", () => {
    const wrapper = shallow(<TimePicker />);
    wrapper.unmount();
  });
});
