import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import'./Login.css'

const Login = () => {
    const {signInUsingGoogle}=useAuth()
    const location = useLocation()
  const history = useHistory()
  const redirect_uri = location.state?.from || '/home'
  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then(result => {
        history.push(redirect_uri)
      })
  }
    return (
        <div className='login'>
         <p className='text-info fs-4'>Please login by Google</p>
        <button onClick={ handleGoogleLogin} className='btn btn-warning'>Google Signin</button>
        </div>
    );
};

export default Login;