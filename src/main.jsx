import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { fetchStatus } from "./redux/status/statusSlice";
import { fetchPriorities } from "./redux/priorities/prioritiesSlice";
import { fetchTags } from "./redux/tags/tagsSlice";

store.dispatch(fetchTags());
store.dispatch(fetchStatus());
store.dispatch(fetchPriorities());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
