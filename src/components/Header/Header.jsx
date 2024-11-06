import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/argentBankLogo.webp';
import { FaSignOutAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../redux/signInSlice';
import { useEffect } from 'react';


function Header() {
    const userProfile = useSelector((state) => state.userProfile);
    const dispatch = useDispatch();
    const token = useSelector((state) => state.signIn.token);
    useEffect(() => {
        localStorage.setItem("testToken", "test_value");
        console.log("Test Token :", localStorage.getItem("testToken")); 
        localStorage.removeItem("testToken");
    }, []); 
    console.log(token);

    const handleSignOut = () => {
        dispatch(signOut());
        localStorage.removeItem("token");
    }
  return (
        <nav className='main-nav'>
            <Link className='main-nav-logo' to="/"><img className='main-nav-logo-image'src={Logo} alt='Logo'/>
            <h1 className='sr-only'>Argent Bank</h1></Link>
            
            { 
                token ? (
                    <> 
                    <div className='main-menu'>
                        <Link className='main-nav-item' to='/dashboard'>
                            <FaUserCircle  className='fa fa-user-circle' aria-hidden="true"/>
                            {userProfile.userName ? userProfile.userName : userProfile.firstName}
                        </Link>
                        <Link className='main-nav-item' to="/" onClick={handleSignOut}  >
                            <FaSignOutAlt className='fa fa-sign-out' aria-hidden="true"/>
                            <p>Sign Out</p>
                        </Link>
                    </div>
                    
                    </>
                ) : ( 
                    <div className='main-menu'>
                        <Link className='main-nav-item' to='/signin'>
                            <FaUserCircle className='fa fa-user-circle' aria-hidden="true"/>
                            <p>Sign In</p>
                        </Link>
                    </div>
                )
            }
            
        </nav>
    )
}

export default Header