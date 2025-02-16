import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PostList from './components/PostList/PostList';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<div><Header /><PostList /><Footer /></div>} />
          <Route path="/post/:id" element={<div><Header /><PostDetail post={{ title: 'Sample Post', content: 'This is the content of the sample post.' }} /><Footer /></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
