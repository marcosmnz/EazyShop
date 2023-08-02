import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import LayoutView from "./components/Layout/LayoutView.jsx";
import "./index.css";
import ErrorPage from "./View/ErrorPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import ProductDetail from "./components/ProductDetail/index.jsx";
import CartPage from "./View/CartPage.jsx";
import Login from "./View/Login/index";
import DashboardJewelery from "./components/Categories/JewelryCat.jsx";
import ContextGlobalProvider from "./Context/ContextGlobal";
import Reports from "./View/Reports.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LayoutView>
        <App />
      </LayoutView>
    ),
    errorElement: (
      <LayoutView>
        <ErrorPage />
      </LayoutView>
    ),
  },
  {
    path: "home",
    element: (
      <LayoutView>
        <App />
      </LayoutView>
    ),
    errorElement: (
      <LayoutView>
        <ErrorPage />
      </LayoutView>
    ),
  },
  {
    path: "/product/:id/:name",
    element: (
      <LayoutView>
        <ProductDetail />,
      </LayoutView>
    ),
  },
  {
    path: "cart",
    element: (
      <PrivateRoute>
        <LayoutView>
          <CartPage />
        </LayoutView>
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <LayoutView>
        <Login />
      </LayoutView>
    ),
  },
  {
    path: "category/:category",
    element: (
      <LayoutView>
        <DashboardJewelery />
      </LayoutView>
    ),
  },
  {
    path: "/issues",
    element: (
      <LayoutView>
        <Reports />
      </LayoutView>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextGlobalProvider>
      <RouterProvider router={router} />
    </ContextGlobalProvider>
  </React.StrictMode>
);
