import React, { useState } from 'react';
import "./Form.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/signInSlice'
import callAPI from '../../redux/api';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = async (e) => {
    if (e && e.preventDefault) e.preventDefault();

    try {
      const response = await callAPI("getToken", {email, password});
      console.log("Réponse de l'API :", response);
      const token = response?.body?.token;
      if (!token) {
        console.error("Token non trouvé dans la réponse de l'API");
        setErrorMessage("Erreur : Impossible de récupérer le token.");
        return;
      }

      localStorage.setItem("token", token);
      dispatch(signIn(token));
      navigate("/dashboard");
    } catch (error) {
      console.error("Erreur lors de la connexion à l'API :", error);
      setErrorMessage(error.message);
    }
  }

  return (
    <form onSubmit={handleSignIn}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in-button">Sign In</button>  
      {errorMessage && <div className="error-msg">{errorMessage}</div>}    
    </form>
  )
}

export default Form
