/* eslint-disable no-unused-vars */
import React from 'react';
import { useAppContext } from '../Context/Context';  
import { Link } from 'react-router-dom'; 
import { FaSun, FaMoon, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    const { isDarkMode, toggleTheme, cartCount } = useAppContext(); 

    return (
        <nav style={{ display: 'flex', alignItems: 'center', padding: '10px', justifyContent: 'space-between', backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h2>Better to Buy</h2>
            </div>
            <Link to={'/'}>Home</Link>
            <Link to={'/cart'}>Cart</Link>
            <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <FaShoppingCart size={24} />
                <span style={{ marginLeft: '8px', fontSize: '14px', fontWeight: 'bold' }}>{cartCount}</span>
            </div>
            <button onClick={toggleTheme} style={{ marginLeft: '20px' }}>
                {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
        </nav>
    );
};

export default Navbar;
