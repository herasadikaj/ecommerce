/* eslint-disable no-unused-vars */
import React from 'react';
import { useAppContext } from '../Context/Context'; 
import Layout from './Layout/Layout';
import './style.css';
import { Link } from 'react-router-dom'; 

const Cart= () => {
    const { cartItems, removeFromCart, clearCart, totalPrice } = useAppContext();

    return (
        <Layout>
            <div className="cart-page-container" style={{ width: '100vw' }}>
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <ul>
                            {cartItems.map((item) => (
                                <li key={item.id} className="cart-item">
                                    <div>
                                        <img src={item.image} alt={item.name} />
                                        <h3>{item.name}</h3>
                                        <p>Price: ${parseFloat(item.price || 0).toFixed(2)}</p>
                                        <p>Quantity: {parseInt(item.quantity, 10)}</p>
                                        <Link to={`/article/${item.id}`}>
                                            View Details
                                        </Link>
                                        <br />
                                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <h3 className="total-price">
                            Total Price: ${totalPrice ? totalPrice.toFixed(2) : '0.00'}
                        </h3>
                        <button onClick={clearCart} className="clear-cart">Remove All</button>
                    </>
                )}
            </div>
        </Layout>
    );
};

export default Cart;