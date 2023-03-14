import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { StateContextProvider } from "./Context/StateContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  
    <StateContextProvider><BrowserRouter>
      <App /></BrowserRouter>
    </StateContextProvider>
  
);
