import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";

import API from "Src/config/api";

import * as actions from "../storiesListActions";
import * as actionTypes from "../storiesListConstants";

describe("Actions", () => {
  describe("Sync actions: ", () => {
    it("ACTION FOR FETCH STORIES LIST BEGIN", () => {
      expect(actions.storiesListRequest()).toEqual({
        type: actionTypes.STORIES_LIST_REQUEST,
      });
    });

    it("ACTION FOR FETCH STORIES LIST SUCCESS", () => {
      const expectedAction = {
        type: actionTypes.STORIES_LIST_SUCCESS,
        storiesList: {},
      };

      expect(actions.storiesListSuccess({})).toEqual(expectedAction);
    });

    it("ACTION FOR FETCH STORIES LIST FAILURE", () => {
      const expectedAction = {
        type: actionTypes.STORIES_LIST_FAILURE,
        error: {},
      };

      expect(actions.storiesListFailure({})).toEqual(expectedAction);
    });
  });

  describe("Async actions: getStoriesList", () => {
    let store;
    const mockStore = configureMockStore([thunk]);
    const mock = new MockAdapter(API);

    beforeEach(() => {
      store = mockStore({});
    });

    afterEach(() => {
      mock.reset();
    });

    it("GET STORIES LIST: SUCCESS", () => {
      const expectedData = {
        id: "1",
        by: "user",
        type: "story",
        author: "author",
      };

      const expectedActions = (storiesList) => [
        actions.storiesListRequest(),
        actions.storiesListSuccess(storiesList),
      ];

      mock
        .onGet("topstories.json")
        .reply(200, [expectedData.id])
        .onGet(`item/${expectedData.id}.json`)
        .reply(200, expectedData)
        .onGet(`user/${expectedData.by}.json`)
        .reply(200, expectedData.author);

      return store.dispatch(actions.getStoriesList()).then((result) => {
        expect(store.getActions()).toEqual(expectedActions(result.storiesList));
      });
    });

    it("GET STORIES LIST: FAILURE", () => {
      const expectedActions = (error) => [
        actions.storiesListRequest(),
        actions.storiesListFailure(error),
      ];

      mock.onGet("topstories.json").networkError();

      return store.dispatch(actions.getStoriesList()).then((result) => {
        expect(store.getActions()).toEqual(expectedActions(result.error));
      });
    });
  });
});
