import React from "react";

import Loader from "../Loader";

describe("<Loader />", () => {
  const wrapper = global.mount(<Loader />);

  it("should contains loader icon", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
