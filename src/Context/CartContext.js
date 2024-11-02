import { useState} from 'react';

export const useCart = () => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const addToCart = (article) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === article.id);
            let updatedItems;
    
            if (existingItem) {
               
                updatedItems = prevItems.map(item =>
                    item.id === article.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                
                updatedItems = [...prevItems, { ...article, quantity: 1 }];
            }
    
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    
            return updatedItems;
        });
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

    return { cartItems, addToCart, removeFromCart, clearCart, cartCount };
};
