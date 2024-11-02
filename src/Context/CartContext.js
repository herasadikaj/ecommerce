import { useState } from 'react';

export const useCart = () => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const addToCart = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
      
            setCartItems(cartItems.map(item => 
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
        
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };
    

    const removeFromCart = (articleId) => {
        setCartItems(prevItems => {
            const updatedItems = prevItems.map(item =>
                item.id === articleId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter(item => item.quantity > 0);
            return updatedItems;
        });
    };

    const clearCart = () => setCartItems([]);

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    
 
const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price || 0); 
    const quantity = parseInt(item.quantity, 10);
    return acc + (price * quantity);
}, 0) || 0; 


const getItemQuantity = (id) => {
    const item = cartItems.find((cartItem) => cartItem.id === id);
    return item ? item.quantity : 0;
};
    return { cartItems, addToCart, removeFromCart, clearCart, cartCount, totalPrice , getItemQuantity};
};
