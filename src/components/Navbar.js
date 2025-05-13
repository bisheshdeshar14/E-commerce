import React, { useState } from 'react';
import { Menu, Button, Drawer, Badge } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MenuOutlined, ShoppingCartOutlined, UserOutlined, LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import showSuccessToast from '../pages/Toastify';

import { Dropdown, Space } from 'antd';

const Navbar = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const state = useSelector(state => state.handleCart);
    const isLogin = localStorage.getItem("is_login") === "1"; // Check login status
    const username = localStorage.getItem("username");

    const showDrawer = () => {
        setVisible(true);
    };

    const closeDrawer = () => {
        setVisible(false);
    };
    const handleLogoutClick = () => {
        localStorage.setItem('is_login', 0);
        navigate('/login');
        showSuccessToast('logout successful'); 
      }

      const items: MenuProps['items'] = [
        {
            key: '1',
            label: `${username}`, 
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
        {
          key: '4',
          label: 'Logout',
          icon: <LogoutOutlined />,
          onClick: () => handleLogoutClick(),
        },
      ];
      

    return (
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
                    
                    <NavLink to="/cart" className="btn btn-outline-danger d-flex align-items-center gap-1">
                        <Badge count={state.length} offset={[5, 0]}>
                            <ShoppingCartOutlined className="fs-5" />
                        </Badge>
                        Cart
                    </NavLink>
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
                    {isLogin && (
                        <Menu.Item key="cart">
                            <NavLink to="/cart" className="btn btn-outline-danger d-flex align-items-center gap-1">
                                <Badge count={state.length} offset={[5, 0]}>
                                    <ShoppingCartOutlined className="fs-5" />
                                </Badge>
                                Cart
                            </NavLink>
                        </Menu.Item>
                    )}
                </Menu>
            </Drawer>
        </nav>
    );
};

export default Navbar;
