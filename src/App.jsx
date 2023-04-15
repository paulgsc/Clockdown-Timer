import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countdown from './components/countdown/Countdown'
import Backdrop from './components/backdrop/Backdrop'
import Fireworks from './components/fireworks/Fireworks';
import Login from './components/auth/Login';
import './App.css';
import Signup from './components/auth/Signup';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <Router>
      <Routes>
        
        <Route path='/' element={
          <>
            <Navbar />
            <Backdrop />
          </>
        }
        />
        <Route path='/login' element={
          <>
            <Login />
          </>
        }
        />
        <Route path='/signup' element={
          <>
            <Signup />
          </>
        }
        />

      </Routes>

    </Router>

 
  )
}

export default App
