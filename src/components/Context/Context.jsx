/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const articles = [
        { id: 1, name: "Vans", price: "80$", image: "https://images.journeys.ca/images/products/1_238883_ZM.JPG", description: "Classic Vans skate shoes with a low-top design, durable canvas, and waffle rubber sole for superior grip and comfort. Perfect for daily wear and any casual outing." },
        { id: 2, name: "Nirvana Tshirt", price: "40$", image: "https://www.kidvicious.co.uk/cdn/shop/products/Nirvana_Adult_T_Shirt_Smiley_Face.jpg?v=1674228049", description: "Vintage-inspired Nirvana T-shirt featuring the iconic smiley face logo. Made from soft, breathable cotton, this T-shirt is ideal for fans of rock and timeless style." },
        { id: 3, name: "Backpack", price: "100$", image: "https://www.fgear.in/cdn/shop/files/1_9822ae18-0551-41fa-8cc1-1745a1359531.jpg?v=1717826522&width=1946", description: "Spacious and durable backpack with multiple compartments for organized storage. Made with water-resistant material, it’s designed for travelers, students, and adventurers alike." },
        { id: 4, name: "Cap", price: "20$", image: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/bltbc47b83e820fc89c/64819bbb08f04ae1d7dca1c1/28726.jpg?format=pjpg&auto=webp&quality=75%2C90&width=3840", description: "Classic baseball cap with adjustable strap and breathable material. Perfect for outdoor activities and casual styling, it offers comfort with a modern look." },
        { id: 5, name: "Socks", price: "10$", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQdIKn-XdenpLRKQT6Tj67IW_QT1FxWT8JYYZ92skg7Bz8pk1pa2wd7T_UL9doxNRgIG0&usqp=CAU", description: "Soft, comfortable socks made with a blend of cotton and stretch fabric for durability. Ideal for everyday wear, providing breathability and lasting comfort." },
        { id: 6, name: "Jacket", price: "70$", image: "https://oliveplanet.in/cdn/shop/files/tactical_softshell_jacket_olive_green_with_shoulder_flap_name_tab_1280x.jpg?v=1702017307", description: "Tactical softshell jacket made from water-resistant fabric, featuring multiple pockets and reinforced shoulder flaps. Perfect for outdoor enthusiasts looking for warmth and utility." },
        { id: 7, name: "Sunglasses", price: "40$", image: "https://api.woggles.in/api/catalog/products/woggles_new_image_9_12_2022/midnight_polarized_wayfarer_sunglasses_base_28-9-2023.jpg", description: "Stylish polarized wayfarer sunglasses offering full UV protection. A versatile accessory for bright, sunny days with a classic design that complements any outfit." },
        { id: 8, name: "Wallet", price: "20$", image: "https://www.graphicimage.com/cdn/shop/files/WLM-HAR-BRN-2_fd9e006c-47ad-4c6e-bb73-716e757542b4.jpg?v=1684737127", description: "Sleek and compact leather wallet with multiple card slots and a bill compartment. Perfect for those who appreciate minimalistic style and functionality." },
        { id: 9, name: "Shirt", price: "30$", image: "https://imagescdn.thecollective.in/img/app/product/8/899861-11009513.jpg?w=500&auto=format", description: "Elegant button-down shirt made from premium fabric with a slim fit design. Ideal for both casual and formal wear, offering comfort with a modern look." },
        { id: 10, name: "Hoodie", price: "40$", image: "https://i5.walmartimages.com/asr/67c1b922-6dca-417c-9a1d-a40819a26d05.9f874a3b46ca8ac8663546fca99b8c1a.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" }
    ];

    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('isDarkMode');
        return savedMode === 'true'; 
    });

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    const [cartItems, setCartItems] = useState(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        return savedCartItems ? JSON.parse(savedCartItems) : []; 
    });

    const addToCart = (article) => {
        console.log("Add to cart called for:", article.name);
        setCartItems(prevItems => {
            const itemIndex = prevItems.findIndex(item => item.id === article.id);
            if (itemIndex > -1) {
                const updatedItems = [...prevItems];
                updatedItems[itemIndex].quantity += 1; 
                console.log("Updated quantity for:", article.name, updatedItems[itemIndex].quantity);
                return updatedItems;
            } else {
                console.log("New item added:", article.name);
                return [...prevItems, { ...article, quantity: 1 }];
            }
        });
    };
    
    const removeFromCart = (articleId) => {
        console.log("Remove from cart called for ID:", articleId);
        setCartItems(prevItems => {
            const itemIndex = prevItems.findIndex(item => item.id === articleId);
            if (itemIndex > -1) {
                const updatedItems = [...prevItems];
                if (updatedItems[itemIndex].quantity > 1) {
                    updatedItems[itemIndex].quantity -= 1; 
                } else {
                    updatedItems.splice(itemIndex, 1); 
                }
                console.log("Updated cart after removal:", updatedItems);
                return updatedItems;
            }
            return prevItems;
        });
    };
    

    useEffect(() => {
        localStorage.setItem('isDarkMode', isDarkMode);
        document.body.classList.toggle('dark-theme', isDarkMode);
    }, [isDarkMode]);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems)); 
    }, [cartItems]);

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);


        const clearCart = () => {
            setCartItems([]);
        };
        
  
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
