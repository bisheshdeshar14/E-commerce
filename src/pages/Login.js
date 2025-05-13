import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer} from "../components";
import "bootstrap/dist/css/bootstrap.min.css";

import { Menu, Button, Drawer, Badge } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MenuOutlined, ShoppingCartOutlined, UserOutlined, LoginOutlined, LogoutOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import showSuccessToast from '../pages/Toastify';
import { Dropdown, Space } from 'antd';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); 
  const state = useSelector(state => state.handleCart);
  
  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (user.username === "admin" && user.password === "admin") {
      localStorage.setItem("is_login", 1);
      localStorage.setItem("username", user.username);
      navigate("/admin/dashboard");
    } else if (storedUserData && user.username === storedUserData.username && user.password === storedUserData.password) {
      localStorage.setItem("is_login", 1);
      localStorage.setItem("username", user.username);
      showSuccessToast('Login');
      navigate("/"); 
    } else {
      localStorage.setItem("is_login", "0");
      setMessage("Login Failed");
    }
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'My Account',
      disabled: true,
    },
    {
      type: 'divider',
    },
    {
      key: '2',
      label: 'Login',
      icon: <LoginOutlined />,
      onClick: () => navigate('/login'),
    },
    {
      key: '3',
      label: 'Register',
      icon: <UserOutlined />,
      onClick: () => navigate('/register'),
    },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 sticky-top">
        <div className="container-fluid d-flex justify-content-between align-items-center px-4">
          <NavLink to="/" className="navbar-brand fw-bold fs-4 text-primary">MERO PASAL</NavLink>
          
          <div className="d-none d-lg-flex align-items-center gap-4">
            <NavLink to="/" className="nav-link text-dark fw-semibold hover-underline">Home</NavLink>
            <NavLink to="/product" className="nav-link text-dark fw-semibold hover-underline">Products</NavLink>
            <NavLink to="/about" className="nav-link text-dark fw-semibold hover-underline">About</NavLink>
            <NavLink to="/contact" className="nav-link text-dark fw-semibold hover-underline">Contact</NavLink>
          </div>
          
          <div className="d-none d-lg-flex align-items-center gap-3">
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
              <Space>
                  <MenuOutlined />
              </Space>
              </a>
            </Dropdown>
          </div>
          
          <Button className="d-lg-none" type="text" icon={<MenuOutlined />} onClick={showDrawer} />
        </div>
        
        <Drawer title="Menu" placement="right" onClose={closeDrawer} visible={visible}>
            <Menu mode="vertical" className="pt-3" onClick={closeDrawer}>
              <Menu.Item key="home">
                  <NavLink to="/">Home</NavLink>
              </Menu.Item>
              <Menu.Item key="products">
                  <NavLink to="/product">Products</NavLink>
              </Menu.Item>
              <Menu.Item key="about">
                  <NavLink to="/about">About</NavLink>
              </Menu.Item>
              <Menu.Item key="contact">
                  <NavLink to="/contact">Contact</NavLink>
              </Menu.Item>
              <Menu.Item key="login">
                  <NavLink to="/login"><LoginOutlined /> Login</NavLink>
              </Menu.Item>
              <Menu.Item key="register">
                  <NavLink to="/register"><UserOutlined /> Register</NavLink>
              </Menu.Item>
            </Menu>
        </Drawer>
      </nav>

      <div className="container-fluid login-container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-md-4 col-lg-4 col-sm-8">
            <div className="card shadow-lg p-4">
              <h1 className="text-center mb-4" style={{ color: "#4e73df" }}>Login</h1>
              <hr />
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label" style={{ color: "#4e73df" }}>Username</label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Enter Username"
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" style={{ color: "#4e73df" }}>Password</label>
                  <div className="input-group">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      className="form-control custom-input"
                      placeholder="Enter Password"
                      onChange={(e) => setUser({ ...user, password: e.target.value })}
                      required
                    />
                    <span className="input-group-text" onClick={() => setPasswordVisible(!passwordVisible)}>
                      {passwordVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                    </span>
                  </div>
                </div>

                {message && <div className="alert alert-danger text-center">{message}</div>}

                <button type="submit" className="btn btn-primary w-100 custom-button">
                  Login
                </button>

                <div className="text-center mt-3">
                  <p>
                    New here?{" "}
                    <Link to="/register" className="text-decoration-underline" style={{ color: "#4e73df" }}>
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
