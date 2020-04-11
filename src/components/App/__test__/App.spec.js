import React from "react";

import App from "Components/App/App";

describe("<App />", () => {
  const wrapper = global.shallow(<App />);

  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
