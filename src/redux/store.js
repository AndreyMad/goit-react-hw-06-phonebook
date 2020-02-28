import { createStore } from "redux";
/* eslint-disable no-underscore-dangle */

const store = createStore(
  () => ({
    value: 0
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
