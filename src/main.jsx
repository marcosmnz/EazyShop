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
import ComingSoon from "./View/ComingSoon.jsx";
import Footer from "./View/Footer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LayoutView>
        <App />
        <Footer/>
      </LayoutView>
    ),
    errorElement: (
      <LayoutView>
        <ErrorPage />
        <Footer/>
      </LayoutView>
    ),
  },
  {
    path: "home",
    element: (
      <LayoutView>
        <App />
        <Footer/>
      </LayoutView>
    ),
    errorElement: (
      <LayoutView>
        <ErrorPage />
        <Footer/>
      </LayoutView>
    ),
  },
  {
    path: "/product/:id/:name",
    element: (
      <LayoutView>
        <ProductDetail />
        <Footer/>
      </LayoutView>
    ),
  },
  {
    path: "cart",
    element: (
      <PrivateRoute>
        <LayoutView>
          <CartPage />
        <Footer/>
        </LayoutView>
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <LayoutView>
        <Login />
        <Footer/>
      </LayoutView>
    ),
  },
  {
    path: "category/:category",
    element: (
      <LayoutView>
        <DashboardJewelery />
        <Footer/>
      </LayoutView>
    ),
  },
  {
    path: "/issues",
    element: (
      <LayoutView>
        <Reports />
        <Footer/>
      </LayoutView>
    ),
  },
  {
    path: "/signup",
    element: (
      <LayoutView>
        <ComingSoon/>
        <Footer/>
      </LayoutView>
    )
  },
  {
    path: "/product",
    element: (
      <LayoutView>
        <ComingSoon/>
        <Footer/>
      </LayoutView>
    )
  },
  {
    path: "/profile",
    element: (
      <LayoutView>
        <ComingSoon/>
        <Footer/>
      </LayoutView>
    )
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextGlobalProvider>
      <RouterProvider router={router} />
    </ContextGlobalProvider>
  </React.StrictMode>
);
