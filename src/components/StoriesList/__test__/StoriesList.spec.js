import React from "react";

import { StoriesList } from "../StoriesList";

describe("<StoriesList />", () => {
  const props = {
    fetchStoriesList: jest.fn(),
    storiesList: [],
    error: null,
    loading: true,
  };

  const wrapper = global.mount(<StoriesList {...props} />);

  it("should show loader when StoriesList component is loading", () => {
    expect(wrapper.find("Loader")).toHaveLength(1);
  });

  describe("StoriesList is loaded", () => {
    beforeEach(() => {
      wrapper.setProps({
        ...props,
        loading: false,
      });
    });

    it("should hide loader when StoriesList component is loaded", () => {
      expect(wrapper.find("Loader")).toHaveLength(0);
    });

    it("should call mock function when StoriesList component is loaded", () => {
      expect(props.fetchStoriesList).toHaveBeenCalled();
    });

    it("should show error message when request of StoriesList is rejected", () => {
      expect(wrapper.exists(".error-message")).toBeFalsy();
      wrapper.setProps({
        ...props,
        loading: false,
        error: {},
      });
      expect(wrapper.exists(".error-message")).toBeTruthy();
    });

    it("should show message if StoriesList is empty", () => {
      expect(wrapper.exists(".message")).toBeTruthy();
    });

    it("should show the correct StoriesList", () => {
      wrapper.setProps({
        ...props,
        loading: false,
        storiesList: [
          {
            id: 1,
            title: "Title",
            time: 1,
            score: 1,
            author: {
              id: "1",
              karma: 1,
            },
          },
        ],
      });
    });
  });
});
