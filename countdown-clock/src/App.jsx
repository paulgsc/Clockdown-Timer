import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countdown from './components/countdown/Countdown'
import Backdrop from './components/backdrop/Backdrop'
import Fireworks from './components/fireworks/Fireworks';
import Login from './components/auth/Login';
import './App.css';
import Signup from './components/auth/Signup';
import Home from './screens/Home';
import Listings from './screens/Listings';
import { useStateValue } from './contexts/StateProvider';
import { auth } from './firebase';


function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        console.log(authUser)
        dispatch({type: 'SET_USER', payload: {user: authUser} })
      }else {
        dispatch({type: 'SET_USER', payload: {user: null} })
      }
    })
  }, []);

  return (
    <Router>
      <Routes>
        
        <Route exact path='/' element={
          <>
            <Home />
          </>
        }
        />
        <Route exact path='/listings' element={
          <>
            <Listings />
          </>
        }
        />
        <Route exact path='/login' element={
          <>
            <Login />
          </>
        }
        />
        <Route exact path='/signup' element={
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
