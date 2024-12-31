import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

const CheckoutPage = () => {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    alert('Order placed!');
  };

  return (
    <div>
      <h1>Checkout</h1>
      {cart.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
        </div>
      ))}
      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
};

export default CheckoutPage;
