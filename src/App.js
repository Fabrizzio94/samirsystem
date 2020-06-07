import React from 'react';
import './App.scss';
// Components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

// Routes
import Routes from './Routes'
function App() {
  return (
   <>
    <Header/>
    <ScrollToTop/>
    <Routes/>
    <Footer />
   </>
  );
}

export default App;
