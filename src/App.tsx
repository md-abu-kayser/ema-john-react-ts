import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import About from "./components/About/About";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/inventory",
          element: <Inventory />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/",
          element: <Shop />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
