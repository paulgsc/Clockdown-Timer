import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countdown from './components/countdown/Countdown'
import Backdrop from './components/backdrop/Backdrop'
import Fireworks from './components/fireworks/Fireworks';


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
        <Route path='/fireworks' element={
          <>
            <Fireworks />
          </>
        }
        />

      </Routes>

    </Router>

 
  )
}

export default App
