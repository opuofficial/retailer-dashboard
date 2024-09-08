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
import ManageOrder from "./pages/manage-order";
import OrderList from "./pages/order-list";
import OrderDetails from "./pages/order-details";

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
        path: "manage-order",
        element: <ManageOrder />,
      },
      {
        path: "manage-order/order-details/:id",
        element: <OrderDetails />,
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
        path: "report/order-list",
        element: <OrderList />,
      },
      {
        path: "report/order-list/order-details/:id",
        element: <OrderDetails />,
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
