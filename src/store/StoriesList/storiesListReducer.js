import {
  STORIES_LIST_REQUEST,
  STORIES_LIST_SUCCESS,
  STORIES_LIST_FAILURE,
} from "./storiesListConstants";

export const initialState = {
  storiesList: [],
  loading: true,
  error: null,
};

const storiesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORIES_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case STORIES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        storiesList: action.storiesList,
      };

    case STORIES_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default storiesListReducer;
