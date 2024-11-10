import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Form.css';

function Form() {
  const [dataLogin, setDataLogin] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSetInput = (e) => {
    const { name, value } = e.target;
    setDataLogin({
      ...dataLogin,
      [name]: value,
    });
  };

  const handleSignIn = async (e) => {
    e.preventDefault(); 
    if (!dataLogin.email || !dataLogin.password) {
      alert('Please fill in both email and password.');
      return;
    }
    console.log('Request Payload:', dataLogin);

    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', dataLogin, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response:', response);

      if (response.status === 200) {
        const token = response.data.body.token;
        localStorage.setItem('token', token);
        navigate('/dashboard');
      } else {
        alert('Error: ' + response.data.message || 'Identifiants incorrects.');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      alert('Identifiants incorrects.');
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          type="email" 
          id="email"
          name="email"
          value={dataLogin.email}
          onChange={handleSetInput}
          autoComplete="email" 
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={dataLogin.password}
          onChange={handleSetInput}
          autoComplete="current-password" 
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in-button">Sign In</button>
    </form>
  );
}

export default Form;
