/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from './Context/Context';
import Layout from './Layout/Layout';

const ArticleDetail = () => {
    const { articleId } = useParams();
    const { articles } = useAppContext();

    const article = articles.find(item => item.id === parseInt(articleId));

    return (
        <Layout>
            <div style={{ padding: '20px' }}>
                {article ? (
                    <div>
                        <h1>{article.name}</h1>
                        <img src={article.image} alt={article.name} style={{ width: '300px' }} />
                        <p>{article.price}</p>
                        <p>{article.description}</p>
                    </div>
                ) : (
                    <p>Article not found.</p>
                )}
            </div>
        </Layout>
    );
};

export default ArticleDetail;
