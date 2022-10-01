import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Book from './components/Book';
import Categories from './components/Categories';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Book />} />
      <Route path="/category" element={<Categories />} />
    </Routes>
  </BrowserRouter>
);

export default App;
