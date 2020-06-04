import React from 'react';
import './App.scss';
// Components
import Header from './Components/Header/Header';
import Inicio from './Components/Inicio/Inicio';
import Design from './Components/Design/Design';
import Precios from './Components/Precios/Precios';
import Demo from './Components/Demo/Demo';
import Footer from './Components/Footer/Footer';
function App() {
  return (
   <>
    <Header/>
    <Inicio/>
    <Design/>
    <Precios />
    <Demo />
    <Footer />
   </>
  );
}

export default App;
