import React from "react";

import Story from "../Story";

describe("<Story />", () => {
  const props = {
    data: {
      title: "Title",
      time: 1,
      score: 1,
      author: {
        id: "1",
        karma: 1,
      },
    },
  };

  const wrapper = global.mount(<Story {...props} />);

  it("should render correct article", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should add a title link when the 'url' prop is exists", () => {
    expect(
      wrapper.find("header h1").childAt(0).childAt(0).isEmpty()
    ).toBeTruthy();
    wrapper.setProps({
      data: {
        ...props.data,
        url: "url",
      },
    });
    expect(wrapper.find("header h1").childAt(0).childAt(0).type()).toEqual("a");
  });
});
