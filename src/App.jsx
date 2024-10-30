
/* eslint-disable no-unused-vars */
import React from 'react';
import { AppProvider } from './components/Context/Context';
import HomePage from './components/HomePage';
import ArticleDetail from './components/Datails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <AppProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/article/:articleId" element={<ArticleDetail />} />
                </Routes>
            </Router>
        </AppProvider>
    );
};

export default App;
