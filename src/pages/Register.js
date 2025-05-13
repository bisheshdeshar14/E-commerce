import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer, Navbar } from '../components';
import "bootstrap/dist/css/bootstrap.min.css";
import { Menu, Button, Drawer, Badge } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MenuOutlined, ShoppingCartOutlined, UserOutlined, LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import showSuccessToast from '../pages/Toastify';
import { Dropdown, Space } from 'antd';

const Register = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
          const state = useSelector(state => state.handleCart);
      
          const showDrawer = () => {
              setVisible(true);
          };
      
          const closeDrawer = () => {
              setVisible(false);
          };
    
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       
        localStorage.setItem('userData', JSON.stringify(userData));
        showSuccessToast('Account Registered');
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
            <div className="container-fluid register-container">
                <div className="row justify-content-center align-items-center min-vh-100">
                    <div className="col-md-4 col-lg-4 col-sm-8">
                        <div className="card shadow-lg p-4">
                            <h1 className="text-center mb-4" style={{ color: "#4e73df" }}>Register</h1>
                            <hr />
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label" style={{ color: "#4e73df" }}>Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control custom-input"
                                        name="username"
                                        placeholder="Enter Your Name"
                                        value={userData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" style={{ color: "#4e73df" }}>Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control custom-input"
                                        name="email"
                                        placeholder="name@example.com"
                                        value={userData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" style={{ color: "#4e73df" }}>Password</label>
                                    <input
                                        type="password"
                                        className="form-control custom-input"
                                        name="password"
                                        placeholder="Password"
                                        value={userData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="my-3 text-center">
                                    <p>
                                        Already have an account?{" "}
                                        <Link to="/login" className="text-decoration-underline" style={{ color: "#4e73df" }}>
                                            Login
                                        </Link>
                                    </p>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-primary w-100 custom-button" type="submit">
                                        Register
                                    </button>
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

export default Register;
