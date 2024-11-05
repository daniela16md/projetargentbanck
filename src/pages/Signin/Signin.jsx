import React from 'react';
import './Signin.css';
import Form from '../../components/Form/Form';
import { FaUserCircle } from "react-icons/fa";

function Signin() {
  return (
    <div className='main bg-dark'>
      <section className="sign-in-content">
        <FaUserCircle className="fa-solid fa-user-circle sign-in-icon"/>
        <h1 className='loginh1'>Sign In</h1>
        <Form />
      </section>
    </div>
  )
}

export default Signin