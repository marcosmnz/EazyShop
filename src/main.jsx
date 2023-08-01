import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import LayoutView from './components/Layout/LayoutView.jsx'
import './index.css'
import ErrorPage from './View/ErrorPage'
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'
import ProductDetail from './components/ProductDetail/index.jsx'
import CartPage from './View/CartPage.jsx'
import Login from './View/Login/index'
import DashboardJewelery from './components/Categories/JewelryCat.jsx'
import DashboardElectronics from './components/Categories/ElectronicsCar.jsx'
import ContextGlobalProvider from './Context/ContextGlobal'
import Reports from './View/Reports.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/home',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/product/:id/:name',
    element: <ProductDetail/>
  },
  {
    path: '/cart',
    element:
    <PrivateRoute>
      <CartPage />
    </PrivateRoute>
  },
  {
    path: '/login',
    element: <Login/>
  }, {
    path: '/category/jewelery',
    element: <DashboardJewelery/>
  },
  {
    path: '/category/electronics',
    element: <DashboardElectronics/>
  },
  {
    path:'/issues',
    element: <Reports/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextGlobalProvider>
    <LayoutView>
      <RouterProvider router={router}/>
    </LayoutView>
    </ContextGlobalProvider>
  </React.StrictMode>,
)
