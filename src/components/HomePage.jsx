/* eslint-disable no-unused-vars */
import React from 'react';
import { useAppContext } from './Context/Context'; 
import { Link } from 'react-router-dom'; 
import Layout from './Layout/Layout';

const HomePage = () => {
    const { articles, addToCart } = useAppContext();

    return (
        <Layout>
            <div className='cards'>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                {articles.length > 0 ? (
                    articles.map((article) => (
                        <div key={article.id} style={{
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            width: '200px',
                            padding: '16px',
                            textAlign: 'center'
                        }}>
                            <img src={article.image} alt={article.name} style={{ width: '100%', borderRadius: '8px' }} />
                            <h3>{article.name}</h3>
                            <p>{article.price}</p>
                            <button onClick={() => addToCart(article)}>Add to Cart</button>
                            <br/>
                            <Link to={`/article/${article.id}`}>
                                View Details
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No articles available.</p>
                )}
            </div>
            </div>
        </Layout>
    );
};

export default HomePage;
