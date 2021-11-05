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
import { ContextProvider } from './context'

function App() {


  return (
    <>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
