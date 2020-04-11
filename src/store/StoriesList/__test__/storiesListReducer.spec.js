import * as actionTypes from "../storiesListConstants";
import storiesListReducer, { initialState } from "../storiesListReducer";

describe("<storiesListReducer/>", () => {
  it("FETCH STORIES LIST BEGIN", () => {
    const action = {
      type: actionTypes.STORIES_LIST_REQUEST,
    };

    expect(storiesListReducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("FETCH STORIES LIST SUCCESS", () => {
    const stateFetchBegin = {
      ...initialState,
    };

    const action = {
      type: actionTypes.STORIES_LIST_SUCCESS,
      storiesList: {},
    };

    expect(storiesListReducer(stateFetchBegin, action)).toEqual({
      ...stateFetchBegin,
      storiesList: action.storiesList,
      loading: false,
    });
  });

  it("FETCH STORIES LIST FAILURE", () => {
    const stateFetchBegin = {
      ...initialState,
    };

    const action = {
      type: actionTypes.STORIES_LIST_FAILURE,
      error: {},
    };

    expect(storiesListReducer(stateFetchBegin, action)).toEqual({
      ...stateFetchBegin,
      loading: false,
      error: action.error,
    });
  });

  it("FETCH STORIES LIST BEGIN AFTER FAILURE", () => {
    const initialStateWithError = {
      ...initialState,
      loading: false,
      error: {},
    };

    const action = {
      type: actionTypes.STORIES_LIST_REQUEST,
    };

    expect(storiesListReducer(initialStateWithError, action)).toEqual({
      ...initialStateWithError,
      loading: true,
      error: null,
    });
  });
});
