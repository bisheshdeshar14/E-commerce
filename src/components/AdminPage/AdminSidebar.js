import React from 'react';
import { LaptopOutlined, OrderedListOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';

const { Sider } = Layout;

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  
  const items2: MenuProps['items'] = [
    {
      key: 'sub1',
      icon: <LaptopOutlined/>,
      label: 'Dashboard',
      onClick: () => navigate('/admin/dashboard'), 
    },
    {
      key: 'sub2',
      icon: <UserOutlined  />,
      label: 'Add product',
      onClick: () => navigate('/admin/addproduct'), 
    },
    {
      key: 'sub3',
      icon: <OrderedListOutlined />,
      label: 'Product list',
      onClick: () => navigate('/admin/productlist'), 
    },
    {
      key: 'sub4',
      icon: <UserOutlined  />,
      label: 'Order Management',
      onClick: () => navigate('/admin/orderlist'), 
    },
  ];

  return (
    <Sider width={200} style={{ background: colorBgContainer }}>
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        style={{ height: '100%', borderRight: 0 }}
        items={items2}
      />
    </Sider>
  );
};

export default AdminSidebar;
