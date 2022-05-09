import React from "react";
import { shallow } from "enzyme";

import DatePicker from "../src/components/common/datepicker/Datepicker";

describe("DatePicker component", () => {
  it("mounts without crashing", () => {
    const wrapper = shallow(<DatePicker />);
    wrapper.unmount();
  });
});
