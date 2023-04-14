import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countdown from './components/countdown/Countdown'
import Backdrop from './components/backdrop/Backdrop'
import Fireworks from './components/fireworks/Fireworks';
import Login from './components/auth/Login';
import './App.css';


function App() {
  return (
    <Router>

      <Routes>

        <Route path='/' element={
          <>
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

      </Routes>

    </Router>

 
  )
}

export default App
