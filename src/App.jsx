import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { ConfigProvider } from "antd";

import Login from "./pages/Login";
import BaseLayout from "./layout/BaseLayout";
import Dashboard from "./pages/dashboard";
import LiveChat from "./pages/live-chat";
import Notification from "./pages/notification";
import Settings from "./pages/settings";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/retailer/login"),
  },
  {
    path: "/retailer/login",
    element: <Login />,
  },
  {
    path: "/retailer",
    element: <BaseLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },

      {
        path: "live-chat",
        element: <LiveChat />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
      {
        path: "settings",
        element: <Settings />,
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
