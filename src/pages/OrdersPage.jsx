import React, { useEffect, useState } from 'react';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('API_ENDPOINT/orders') // Replace with your API URL
      .then(response => response.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div>
      <h1>Your Orders</h1>
      {orders.map(order => (
        <div key={order.id}>
          <h2>Order ID: {order.id}</h2>
          <p>Total: ${order.total}</p>
        </div>
      ))}
    </div>
  );
};

export default OrdersPage;
