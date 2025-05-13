import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from 'react-toastify';

import {
  Home,
  Product,
  Products,
  AboutPage,
  ContactPage,
  Cart,
  Login,
  Register,
  Checkout,
  PageNotFound,
  
  Admin,
  AddProduct,
} from "./pages";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import AdminLayout from "./components/AdminPage/AdminLayout";
import AdminAddProduct from "./pages/admin/AdminAddProduct";
import AdminProductList from "./pages/admin/AdminProductList";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProductDetail from "./pages/ProductDetail";
import AdminOrderList from "./pages/admin/AdminOrderList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/product/*" element={<PageNotFound />} />
        

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/addproduct" element={<AdminAddProduct />} />
            <Route path="/admin/productlist" element={<AdminProductList />} />
            <Route path="/admin/orderlist" element={<AdminOrderList />} />
          </Route>

          </Routes>
      </Provider>
    </ScrollToTop>
    <Toaster />
    <ToastContainer />
  </BrowserRouter>
);
