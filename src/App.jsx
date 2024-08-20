import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ConfigProvider } from "antd";

import Login from "./pages/Login";
import BaseLayout from "./layout/BaseLayout";
import Dashboard from "./pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "retailer/login",
        element: <Login />,
      },
      {
        path: "retailer",
        element: <BaseLayout />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#07bfa5",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
