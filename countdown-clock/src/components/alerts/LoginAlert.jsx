import React from 'react';
import '../../styles/components/alerts.css';

function LoginAlert({ erroMessage }) {
  return (
    <div className="login__alert">
        <span className='alert-icon'>i</span>
        <p>{erroMessage}</p>
    </div>
  )
}

export default LoginAlert
