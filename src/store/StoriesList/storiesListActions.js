import API from "Src/config/api";
import _ from "lodash";

import {
  STORIES_LIST_REQUEST,
  STORIES_LIST_SUCCESS,
  STORIES_LIST_FAILURE,
} from "./storiesListConstants";

export const storiesListRequest = () => ({
  type: STORIES_LIST_REQUEST,
});

export const storiesListSuccess = (storiesList) => ({
  type: STORIES_LIST_SUCCESS,
  storiesList,
});

export const storiesListFailure = (error) => ({
  type: STORIES_LIST_FAILURE,
  error,
});

export const getStoriesList = () => (dispatch) => {
  const convertToJsonType = (path) => `${path}.json`;

  dispatch(storiesListRequest());

  return API.get(convertToJsonType("topstories"))
    .then((result) => _.sampleSize(result.data, 10))
    .then((topStoriesIds) =>
      Promise.all(
        topStoriesIds.map((id) =>
          API.get(convertToJsonType(`item/${id}`)).then((story) =>
            API.get(convertToJsonType(`user/${story.data.by}`)).then(
              (author) => ({
                ...story.data,
                author: author.data,
              })
            )
          )
        )
      )
    )
    .then((storiesList) =>
      dispatch(storiesListSuccess(_.sortBy(storiesList, ["score"])))
    )
    .catch((error) => dispatch(storiesListFailure(error)));
};
