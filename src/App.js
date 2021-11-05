import logo from './logo.svg';
import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './components/Shop';
import './index.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {


  return (
    <>
    <Header />
   
        <Shop />

    <Footer />
    </>
  );
}

export default App;
