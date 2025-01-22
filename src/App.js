import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Banner from './components/banner';
import Categories from './components/categories';
import NovoVideo from './pages/NewVideo';

function App() {
  return (
    <Router>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/novo-video" element={<NovoVideo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
