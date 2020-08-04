import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";
import App from "./components/App";

// const composeEnhancers = composeWithDevTools({
//   // Specify here name, actionsBlacklist, actionsCreators and other options
// });
// const store = createStore(reducer, composeEnhancers(
//     applyMiddleware(...middleware),
//     // other store enhancers if any
// ));

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
