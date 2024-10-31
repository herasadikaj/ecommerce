/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from './Context/Context';
import Layout from './Layout/Layout';

const Detail = () => {
    const { articleId } = useParams();
    const { articles, addToCart, removeFromCart, cartCount } = useAppContext();

    const article = articles.find(item => item.id === parseInt(articleId));

    return (
        <Layout>
            <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '100vh', 
                width: '100vw', 
                padding: '20px',
                boxSizing: 'border-box',
                overflow: 'auto'
            }}>
                {article ? (
                    <div style={{ textAlign: 'center', maxWidth: '600px', width: '100%' }}>
                        <h1>{article.name}</h1>
                        <img src={article.image} alt={article.name} style={{ width: '100%', maxWidth: '300px' }} />
                        <p><strong>Price:</strong> {article.price}</p>
                        <p><strong>Description:</strong> {article.description}</p>

                        
                        <div className="buttons" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                            <button onClick={() => addToCart(article)}>+</button>
                            <p>Added: {cartCount}</p>
                            <button onClick={() => removeFromCart(article.id)}>-</button>
                            </div>
                    </div>
                ) : (
                    <p>Article not found.</p>
                )}
            </div>
        </Layout>
    );
};

export default Detail;
