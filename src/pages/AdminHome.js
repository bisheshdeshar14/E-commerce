import React from 'react';

import { Layout, Button } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import AdminSidebar from '../components/AdminPage/AdminSidebar';

const { Header, Content } = Layout;

const AdminHome = () => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate('/login');
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
        <div className="demo-logo" style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>Admin Panel</div>
        <div>
          <Button type="primary" onClick={handleLogoutClick}>
            Logout
          </Button>
        </div>
      </Header>
      <Layout style={{ height: '100vh' }}>
        <AdminSidebar />
        <Layout style={{ padding: '24px', height: '100vh', overflow: 'auto' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              height: '100%',
              background: '#f0f2f5', // or use your own color for the container
              borderRadius: '8px', // use your preferred border-radius
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AdminHome;
