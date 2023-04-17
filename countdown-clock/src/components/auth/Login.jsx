import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/pages/login.css';
import { auth } from '../../firebase';
import LoginAlert from '../alerts/LoginAlert';
import { Icons } from '../../constants/icons/icons';

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
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
    <div className="login-page-container">
        <div className="icon-container"  >
            <div className="back-icon-container" 
              onClick={(e) => {e.preventDefault(); navigate(-1); }}
            >
                <Icons.chevronLeft className='go-back' />
            <span>Back</span>
            </div>
            <div className="home"  >
            <Link to={'/'}><Icons.faHome/></Link>
            </div>
        </div>
    <div className='login'>

    <div className='login__container'>
        <h1>Sign in</h1>
        <form noValidate>
            <div className="form-input email">
                <input className='form_control' type='text' autoCapitalize='none' autoComplete='off' autoCorrect='off'
                        spellCheck='false' placeholder='Email' aria-label='Email'
                        value={email} onChange={e => setEmail(e.target.value)} required/>
                <label htmlFor="name">Email</label>
            </div> 
            <div className="form-input">
                <input className='form_control' type='password'autoCapitalize='none' autoComplete='off' autoCorrect='off'
                        spellCheck='false' placeholder='Enter your password' aria-label='Search' 
                value={password} onChange={e => setPassword(e.target.value)} required/>
                <label htmlFor="name">Enter your password</label>
            </div>
            <div className="recover__creds">
                <a href='/'>Forgot password?</a>
            </div>
            <div className="cache_auth">
                <label>
                    <input type='checkbox' />
                    <span>Keep me logged in for up to 30 days</span>
                </label>
            </div>
            {!!errorMessage.length && <LoginAlert erroMessage={errorMessage} />}
            <button  id="signin-button" className='login__signInButton'
            type='submit' onClick={signIn} disabled={!(email && password)}>Sign in</button>
        </form>
        <div className="sign_up">
            <p>Don't have an account?
                <span><Link to={'/signup'}>Sign Up</Link></span>
            </p>
        </div>
        <p>
            By signing-in you agree to {`<company name>`} Conditions of Use & Sale. 
            .... Enter Legal info ...
        </p>

    </div>
</div>
</div>
  )
}

export default Login
