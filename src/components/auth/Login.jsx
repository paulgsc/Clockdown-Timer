import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/pages/login.css';

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
            <div className="form-input email">
                <input className='form_control' type='text' autoCapitalize='none' autoComplete='off' autoCorrect='off'
                        spellCheck='false' placeholder='Email' aria-label='Email'
                        value={email} onChange={e => setEmail(e.target.value)}/>
                <label for="name">Email</label>
            </div> 
            <div className="form-input">
                <input className='form_control' type='password'autoCapitalize='none' autoComplete='off' autoCorrect='off'
                        spellCheck='false' placeholder='Enter your password' aria-label='Search' 
                value={password} onChange={e => setPassword(e.target.value)}/>
                <label for="name">Enter your password</label>
            </div>  
            <button className='login__signInButton'
            type='submit' onClick={signIn}>Sign in</button>
        </form>
        <p>
            By signing-in you agree to {`<company name>`} Conditions of Use & Sale. 
            .... Enter Legal info ...
        </p>
        <button className='login__registerButton'
        onClick={register}>Create your Amazon Acount</button>
    </div>
</div>
  )
}

export default Login
