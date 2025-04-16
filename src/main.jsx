import React from "react";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { Histori, Home } from "./components";
import { globalStore } from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/history",
        Component: Histori,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={globalStore}>
    <RouterProvider router={router} />
  </Provider>
);
