/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from 'react';
import { articles } from './Article';
import { useTheme } from './ThemeContext';
import { useCart } from './CartContext';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const { isDarkMode, toggleTheme } = useTheme();
    const { cartItems, addToCart, removeFromCart, clearCart, cartCount } = useCart();

    return (
        <AppContext.Provider value={{
            articles,
            cartItems,
            addToCart,
            removeFromCart,
            clearCart,
            cartCount,
            isDarkMode,
            toggleTheme
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
