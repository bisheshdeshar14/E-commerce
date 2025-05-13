import React, { useState } from "react";
import { Navbar, Footer } from "../components";
import "bootstrap/dist/css/bootstrap.min.css"; 

const ContactPage = () => {
  const [user, setUser] = useState({ name: "", email: "", message: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (user.name && user.email && user.message) {
      setMessage("Message Sent Successfully!");
    } else {
      setMessage("Please fill in all the fields.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid login-container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-md-4 col-lg-4 col-sm-8">
            <div className="card shadow-lg p-4">
              <h1 className="text-center mb-4" style={{ color: "#4e73df" }}>Contact Us</h1>
              <hr />
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label" style={{ color: "#4e73df" }}>Name</label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Enter your name"
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" style={{ color: "#4e73df" }}>Email</label>
                  <input
                    type="email"
                    className="form-control custom-input"
                    placeholder="Enter your email"
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" style={{ color: "#4e73df" }}>Message</label>
                  <textarea
                    className="form-control custom-input"
                    rows="5"
                    placeholder="Enter your message"
                    onChange={(e) => setUser({ ...user, message: e.target.value })}
                    required
                  />
                </div>

                {message && <div className="alert alert-info text-center">{message}</div>}

                <button type="submit" className="btn btn-primary w-100 custom-button">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
