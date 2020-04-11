import React from "react";

import Content from "../Content";

describe("<ContentComponent />", () => {
  const wrapper = global.shallow(<Content />);

  it("should contains the StoriesList component", () => {
    expect(wrapper.exists("Connect(StoriesList)")).toBeTruthy();
  });
});
