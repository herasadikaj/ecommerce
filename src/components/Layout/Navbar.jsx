
/* eslint-disable no-unused-vars */
import React from 'react';
import { useAppContext } from '../Context/Context';  

import { FaSun, FaMoon, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    const { isDarkMode, toggleTheme, cartCount } = useAppContext(); 

    return (
        <nav style={{ display: 'flex', alignItems: 'center', padding: '10px', justifyContent: 'space-between', backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h2>Better to Buy</h2>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <FaShoppingCart size={24} />
                <span style={{ marginLeft: '8px', fontSize: '14px', fontWeight: 'bold' }}>
                    {`Items in Cart: ${cartCount}`}
                </span>
            </div>

            <button onClick={toggleTheme} style={{
                padding: '8px 12px',
                backgroundColor: isDarkMode ? '#555' : '#ddd',
                color: isDarkMode ? '#fff' : '#333',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
        </nav>
    );
};

export default Navbar;
