import React from "react";
import ReactDOM from "react-dom/client";
import { createContext, useContext, useReducer } from "react";
import App from "./App.js";
import { BrowserRouter as Router } from "react-router-dom";
import Reducer from "./Reducer.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <Router>
        {/* <StateProvider initialState={initialState} reducer={Reducer}> */}
          <App />
        {/* </StateProvider> */}
      </Router>
    </React.StrictMode>
  </>
);
