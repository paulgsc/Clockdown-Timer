import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/login.css';

function Login() {

    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = e => {
        // e.preventDefault();
        // auth
        //     .signInWithEmailAndPassword(email, password)
        //     .then(auth => {
        //         history('/')
        //     })
        //     .catch(error => alert(error.message))
        console.log('hello world');
    }

    const register = e => {
        // e.preventDefault();
        // auth
        //     .createUserWithEmailAndPassword(email, password)
        //     .then((auth) => {
        //         console.log(auth)
        //         if (auth)  {
        //             history('/')
        //         }
        //     })
        //     .catch(error => alert(error.message))

        console.log('hello world');

    }


  return (
    <div className='login'>

    <div className='login__container'>
        <h1>Sign in</h1>
        <form>
            <h5>E-mail</h5>
            <input type='text' value={email}
            onChange={e => setEmail(e.target.value)}/>
            <h5>Password</h5>
            <input type='password' value={password}
            onChange={e => setPassword(e.target.value)}/>
            <button className='login__signInButton'
            type='submit' onClick={signIn}>Sign in</button>
        </form>
        <p>
            By signing-in you agree to Amazon's FAKE CLONE Conditions of Use & Sale. 
            Please see our Privacy Notie, our Cookies Notice 
            and our Interest-Based Ads Notice.
        </p>
        <button className='login__registerButton'
        onClick={register}>Create your Amazon Acount</button>
    </div>
</div>
  )
}

export default Login
