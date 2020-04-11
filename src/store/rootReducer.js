import { combineReducers } from "redux";

import storiesListReducer from "./StoriesList/storiesListReducer";

const rootReducer = combineReducers({
  storiesListReducer,
});

export default rootReducer;
