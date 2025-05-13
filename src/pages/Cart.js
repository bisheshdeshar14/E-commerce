import React, { useEffect } from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Col, Row, List, Typography, Space, Divider } from "antd";
import { PlusOutlined, MinusOutlined, ShoppingOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";

const { Title, Text } = Typography;

const Cart = () => {
  const navigate = useNavigate();
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  useEffect(() => {
    const isLogin = localStorage.getItem('is_login');
    if(isLogin !== '1'){
      navigate('/login');
      toast.success("You have to login to add to cart");
    }
  });

  const EmptyCart = () => {
    return (
      <div className="container text-center py-5">
        <ShoppingOutlined style={{ fontSize: 50, color: "#ccc" }} />
        <Title level={4} className="mt-3">Your Cart is Empty</Title>
        <Link to="/">
          <Button type="primary" size="large" icon={<ShoppingOutlined />}>Continue Shopping</Button>
        </Link>
      </div>
    );
  };

  const addItem = (product) => {
    dispatch(addCart(product));
  };

  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    
    state.forEach((item) => {
     
      const itemPrice = parseFloat(item.price) || 0; 
      subtotal += itemPrice * item.qty;
      totalItems += item.qty;
    });
  
    return (
      <div className="container py-5">
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={16} md={16} lg={16}>
            <Card title="Your Cart Items" bordered>
              <List
                itemLayout="horizontal"
                dataSource={state}
                renderItem={(item) => {
                  const itemPrice = parseFloat(item.price) || 0; 
                  return (
                    <List.Item>
                      <Row gutter={16} align="middle" style={{ width: "100%" }}>
                        <Col xs={8} sm={6} md={4}>
                          <img src={item.image} alt={item.title} width="100%" style={{ borderRadius: 8 }} />
                        </Col>
                        <Col xs={10} sm={12} md={12}>
                          <Title level={5}>{item.title}</Title>
                          <Text strong>${itemPrice.toFixed(2)}</Text> {/* Corrected here */}
                        </Col>
                        <Col xs={6} sm={6} md={8} className="text-right">
                          <Space>
                            <Button size="small" icon={<MinusOutlined />} onClick={() => removeItem(item)} />
                            <Text>{item.qty}</Text>
                            <Button size="small" icon={<PlusOutlined />} onClick={() => addItem(item)} />
                          </Space>
                        </Col>
                      </Row>
                    </List.Item>
                  );
                }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={8} md={8} lg={8}>
            <Card title="Order Summary" bordered>
              <List>
                <List.Item>
                  <Text>Items ({totalItems})</Text>
                  <Text strong>Rs.{subtotal.toFixed(2)}</Text>
                </List.Item>
                <List.Item>
                  <Text>Shipping</Text>
                  <Text strong>Rs.{shipping.toFixed(2)}</Text>
                </List.Item>
                <Divider />
                <List.Item>
                  <Title level={4}>Total</Title>
                  <Title level={4} type="success">Rs.{(subtotal + shipping).toFixed(2)}</Title>
                </List.Item>
              </List>
              <Link to="/checkout">
                <Button type="primary" block size="large" style={{ marginTop: 16 }}>Proceed to Checkout</Button>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    );
  };
  
  return (
    <>
      <Navbar />
      <div className="container my-4 py-4">
        <Title level={2} className="text-center">Shopping Cart</Title>
        <Divider />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;