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
import PendingProducts from "./pages/pending-products";
import CreateProduct from "./pages/create-product";
import AllProducts from "./pages/all-products";
import ProductDetails from "./pages/product-details";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./providers/AuthProvider";
import Protected from "./pages/protected";

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
    element: (
      <Protected>
        <BaseLayout />
      </Protected>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "manage-products/all-products",
        element: <AllProducts />,
      },
      {
        path: "manage-products/all-products/details/:id",
        element: <ProductDetails />,
      },
      {
        path: "manage-products/pending-products",
        element: <PendingProducts />,
      },
      {
        path: "manage-products/pending-products/create-product",
        element: <CreateProduct />,
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
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <Toaster />
    </ConfigProvider>
  );
}

export default App;
