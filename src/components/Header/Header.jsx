import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/argentBankLogo.webp';
import { FaSignOutAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

import './Header.css'


function Header() {
  
  return (
        <nav className='main-nav'>
        <Link className='main-nav-logo' to="/"><img className='main-nav-logo-image'src={Logo} alt='Logo'/>
        <h1 className='sr-only'>Argent Bank</h1></Link>
            <div className='main-menu'>
            <Link className='main-nav-item' to='/dashboard'>
                <FaUserCircle  className='fa fa-user-circle' aria-hidden="true"/>
                <p>{ "User"}</p>
            </Link>
            <Link className='main-nav-item' to="/" >
                <FaSignOutAlt className='fa fa-sign-out' aria-hidden="true"/>
                <p>Sign Out</p>
            </Link>
            </div>
            <div className='main-menu'>
            <Link className='main-nav-item' to='/signin'>
                <FaUserCircle className='fa fa-user-circle' aria-hidden="true"/>
                <p>Sign In</p>
            </Link>
            </div>
        </nav>
    )
}

export default Header