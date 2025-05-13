import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import showSuccessToast from "./Toastify";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
  const navigate = useNavigate();
  const [formValid, setFormValid] = useState(false);

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">No item in Cart</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const handleCheckout = (event) => {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity()) {
      setFormValid(true);

      const orderData = {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        address: form.address.value,
        paymentMethod: form.paymentMethod.value,
        items: state.map(item => ({
          name: item.name, 
          qty: item.qty,
          price: item.price,
        })),
        total: state.reduce((acc, item) => acc + item.price * item.qty, 0) + 30,
      };

      const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
      existingOrders.push(orderData);
      localStorage.setItem("orders", JSON.stringify(existingOrders));
      localStorage.removeItem("cartItems");

      showSuccessToast("Your order has been successfully placed. Thank you for shopping!");
    } else {
      setFormValid(false);
      form.reportValidity();
    }
  };

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <div className="container py-5">
        <div className="row my-4">
          <div className="col-md-5 col-lg-4 order-md-last">
            <div className="card mb-4">
              <div className="card-header py-3 bg-light">
                <h5 className="mb-0">Order Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products ({totalItems})<span>Rs.{Math.round(subtotal)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping <span>Rs.{shipping}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <strong>Total amount</strong>
                    <span><strong>Rs.{Math.round(subtotal + shipping)}</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h4 className="mb-0">Billing address</h4>
              </div>
              <div className="card-body">
                <form className="needs-validation" noValidate onSubmit={handleCheckout}>
                  <div className="row g-3">
                    <div className="col-sm-6 my-1">
                      <label htmlFor="firstName" className="form-label">First name</label>
                      <input type="text" className="form-control" id="firstName" name="firstName" required />
                    </div>
                    <div className="col-sm-6 my-1">
                      <label htmlFor="lastName" className="form-label">Last name</label>
                      <input type="text" className="form-control" id="lastName" name="lastName" required />
                    </div>
                    <div className="col-12 my-1">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" name="email" required />
                    </div>
                    <div className="col-12 my-1">
                      <label htmlFor="address" className="form-label">Address</label>
                      <input type="text" className="form-control" id="address" name="address" required />
                    </div>
                    <div className="col-12 my-1">
                      <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
                      <select className="form-select" id="paymentMethod" name="paymentMethod" required>
                        <option value="">Choose...</option>
                        <option value="esewa">eSewa</option>
                        <option value="cod">Cash on Delivery</option>
                      </select>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <button className="w-100 btn btn-primary" type="submit">Continue to checkout</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
