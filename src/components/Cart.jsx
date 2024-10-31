/* eslint-disable no-unused-vars */
import React from 'react';
import { useAppContext } from './Context/Context'; 
import Layout from './Layout/Layout';
import './style.css';

const CartPage = () => {
    const { cartItems, removeFromCart, clearCart , addToCart, cartCount} = useAppContext();

    const totalPrice = cartItems.reduce((acc, item) => {
        const price = parseFloat(item.price);
        const quantity = parseInt(item.quantity, 10);
        return !isNaN(price) && !isNaN(quantity) ? acc + (price * quantity) : acc;
    }, 0);

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
                                        <p>Price: ${parseFloat(item.price).toFixed(2)}</p>
                                        <p>Quantity: {parseInt(item.quantity, 10)}</p>
                                        
                                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <h3 className="total-price">Total Price: ${totalPrice.toFixed(2)}</h3>
                        <button onClick={clearCart} className="clear-cart">Remove All</button>
                    </>
                )}
            </div>
        </Layout>
    );
};

export default CartPage;
