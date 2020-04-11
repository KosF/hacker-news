import React from "react";

import { Header } from "../Header";

describe("<Header />", () => {
  const props = {
    refreshStoriesList: jest.fn(),
  };

  const wrapper = global.shallow(<Header {...props} />);

  it("should render correct header", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call mock function when the 'Refresh' button is clicked", () => {
    wrapper.find("button.btn-info").simulate("click");

    expect(props.refreshStoriesList).toHaveBeenCalled();
  });
});
