import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Signin from './pages/Signin/Signin';
import Dashboard from './pages/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes> 
        <Route path="/" element= {<Home />}/>
        <Route path="/signin" element= {<Signin />}/>
        <Route path="/dashboard" element= {<Dashboard/>}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App