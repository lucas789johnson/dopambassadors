import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Facebook from "./components/Facebook.jsx";
import Instagram from "./components/Instagram.jsx";
import Microsoft from "./components/Microsoft.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/microsoft",
    element: <Microsoft/>,
  },
  {
    path: "/facebook",
    element: <Facebook/>,
  },
  {
    path: "/instagram",
    element: <Instagram />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
