/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */

import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const articles = [
        { id: 1, name: "Vans", price: "80$", image: "https://images.journeys.ca/images/products/1_238883_ZM.JPG" },
        { id: 2, name: "Nirvana Tshirt", price: "40$", image: "https://www.kidvicious.co.uk/cdn/shop/products/Nirvana_Adult_T_Shirt_Smiley_Face.jpg?v=1674228049" },
        { id: 3, name: "Backpack", price: "100$", image: "https://www.fgear.in/cdn/shop/files/1_9822ae18-0551-41fa-8cc1-1745a1359531.jpg?v=1717826522&width=1946" },
        { id: 4, name: "Cap", price: "20$", image: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/bltbc47b83e820fc89c/64819bbb08f04ae1d7dca1c1/28726.jpg?format=pjpg&auto=webp&quality=75%2C90&width=3840" },
        { id: 5, name: "Socks", price: "10$", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQdIKn-XdenpLRKQT6Tj67IW_QT1FxWT8JYYZ92skg7Bz8pk1pa2wd7T_UL9doxNRgIG0&usqp=CAU" },
        { id: 6, name: "Jacket", price: "70$", image: "https://oliveplanet.in/cdn/shop/files/tactical_softshell_jacket_olive_green_with_shoulder_flap_name_tab_1280x.jpg?v=1702017307" }
    ];

    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('isDarkMode');
        return savedMode === 'true'; 
    });

    const [cartItems, setCartItems] = useState(() => {
        const savedItems = localStorage.getItem('cartItems');
        return savedItems ? JSON.parse(savedItems) : [];
    });

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    const addToCart = (item) => {
        setCartItems(prevItems => {
            const updatedItems = [...prevItems, item];
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems(prevItems => {
            const updatedItems = prevItems.filter(item => item.id !== itemId);
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    useEffect(() => {
        localStorage.setItem('isDarkMode', isDarkMode);
        document.body.classList.toggle('dark-theme', isDarkMode);
    }, [isDarkMode]);

    return (
        <AppContext.Provider value={{ articles, isDarkMode, toggleTheme, cartItems, addToCart, removeFromCart }}>
            {children}
        </AppContext.Provider>
    );
};
