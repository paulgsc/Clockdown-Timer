import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/pages/login.css';
import { auth } from '../../firebase';
import LoginAlert from '../alerts/LoginAlert';

function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth)
                if (auth)  {
                    navigate('/')
                }
            })
            .catch(error => {

                switch(error.code){
                    case "auth/invalid-email":
                        setErrorMessage("Invalid email address");
                        break;
                    case "auth/user-disabled":
                        setErrorMessage("User account has been disabled");
                        break;
                    case "auth/user-not-found":
                        setErrorMessage("No user found with that email address");
                        break;
                    case "auth/wrong-password":
                        setErrorMessage("Incorrect password");
                        break;
                    default:
                        alert(error.message);

                }
            })

    }

  return (
    <div className='login'>

    <div className='login__container'>
        <h1>Sign Up</h1>
        <form noValidate>
            <div className="form-input email">
                <input className='form_control' type='text' autoCapitalize='none' autoComplete='off' autoCorrect='off'
                        spellCheck='false' placeholder='Email' aria-label='Email'
                        value={email} onChange={e => setEmail(e.target.value)} required />
                <label htmlFor="name">Email</label>
            </div> 
            <div className="form-input">
                <input className='form_control' type='password'autoCapitalize='none' autoComplete='off' autoCorrect='off'
                        spellCheck='false' placeholder='Password (min. 6 characters)' aria-label='Search' minLength='6'
                value={password} onChange={e => setPassword(e.target.value)}
                required  />
                <label htmlFor="name">Password (min. 6 characters)</label>
            </div>
            <button className='login__registerButton'  disabled={!(email && password.length >= 6)}
                onClick={register}>Create a new Acount</button>
            {!!errorMessage.length && <LoginAlert erroMessage={errorMessage} />}
        </form>

        <div className="sign_up">
            <p>Already have an account?
                <span><Link to={'/login'}>Sign In</Link></span>
            </p>
        </div>
        <p>
            By signing-in you agree to {`<company name>`} Conditions of Use & Sale. 
            .... Enter Legal info ...
        </p>
    </div>
</div>
  )
}

export default Signup
