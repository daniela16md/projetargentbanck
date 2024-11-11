import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { fetchUserProfile } from '../../redux/userSlice'; 
import './Form.css'
function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/user/login',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const token = response.data.body.token;
      localStorage.setItem('token', token);

      dispatch(fetchUserProfile());

      navigate('/dashboard');
    } catch (error) {
      console.error('Erreur de connexion:', error);
      alert('Identifiants incorrects');
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          autoComplete="current-email"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          autoComplete="current-password"
        />
      </div>
      <button type="submit" className="sign-in-button">Sign In</button>
    </form>
  );
}

export default SignIn;
