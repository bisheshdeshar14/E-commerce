import React, { useEffect, useState } from "react";

const AdminOrderList = () => {
  const [orders, setOrders] = useState([]);
  const [orderStatuses, setOrderStatuses] = useState({});

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
    const initialStatuses = storedOrders.reduce((acc, _, index) => {
      acc[index] = "Pending";
      return acc;
    }, {});
    setOrderStatuses(initialStatuses);
  }, []);

  const handleStatusChange = (index, status) => {
    setOrderStatuses((prevStatuses) => ({
      ...prevStatuses,
      [index]: status,
    }));
  };

  const handleDeleteOrder = (index) => {
    const updatedOrders = orders.filter((_, i) => i !== index);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <>
      <div className="container my-3 py-3">
        <h1 className="text-center">Order List</h1>
        <hr />
        {orders.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Order #</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total Amount</th>
                  <th>Payment Method</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  order.items.map((item, i) => (
                    <tr key={`${index}-${i}`}>
                      {i === 0 && (
                        <td rowSpan={order.items.length}>{index + 1}</td>
                      )}
                      {i === 0 && (
                        <td rowSpan={order.items.length}>{order.firstName} {order.lastName}</td>
                      )}
                      {i === 0 && (
                        <td rowSpan={order.items.length}>{order.email}</td>
                      )}
                      {i === 0 && (
                        <td rowSpan={order.items.length}>{order.address}</td>
                      )}
                      <td>{item.title}</td>
                      <td>{item.qty}</td>
                      <td>Rs.{item.price}</td>
                      {i === 0 && (
                        <td rowSpan={order.items.length}>Rs.{order.total}</td>
                      )}
                      {i === 0 && (
                        <td rowSpan={order.items.length}>{order.paymentMethod}</td>
                      )}
                      {i === 0 && (
                        <td rowSpan={order.items.length}>
                          <select
                            value={orderStatuses[index]}
                            onChange={(e) => handleStatusChange(index, e.target.value)}
                            className="form-control"
                          >
                            <option value="Pending">Pending</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </td>
                      )}
                      {i === 0 && (
                        <td rowSpan={order.items.length}>
                          <button 
                            className="btn btn-danger"
                            onClick={() => handleDeleteOrder(index)}
                          >
                            Delete
                          </button>
                        </td>
                      )}
                    </tr>
                  ))
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h4 className="text-center">No orders placed yet.</h4>
        )}
      </div>
    </>
  );
};

export default AdminOrderList;
