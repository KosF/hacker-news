import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

const middleware = [thunk];

function configureStore() {
  return createStore(
    rootReducer,
    {}, // initialState
    composeWithDevTools(applyMiddleware(...middleware))
  );
}

const store = configureStore();

export default store;
