import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../images/argentBankLogo.webp';
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import './Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserProfile } from '../../redux/userSlice';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { userName } = useSelector((state) => state.user);
  const token = localStorage.getItem('token');
  
  useEffect(() => {
    if (localStorage.getItem('token') && !userName) {
      dispatch(fetchUserProfile()); 
    }
  }, [dispatch, userName]);

  const handleSignOut = () => {
    localStorage.removeItem('token'); 
    navigate('/'); 
  };

  return (
    <nav className='main-nav'>
      <Link className='main-nav-logo' to="/" onClick={handleSignOut}><img className='main-nav-logo-image'src={Logo} alt='Logo'/>
      <h1 className='sr-only'>Argent Bank</h1></Link>
      <div className='main-menu'>
      {  
        token ? 
        <>    
          <Link className='main-nav-item' to='/dashboard'>
            <FaUserCircle  className='fa fa-user-circle' aria-hidden="true"/>
            <p>{userName ? userName: "User"}</p>
          </Link>
          <Link className='main-nav-item' to="/" onClick={handleSignOut}>
            <FaSignOutAlt className='fa fa-sign-out' aria-hidden="true"/>
            <p>Sign Out</p>
          </Link>
        </>  
        :
        <Link className='main-nav-item' to='/signin'>
          <FaUserCircle className='fa fa-user-circle' aria-hidden="true"/>
          <p>Sign In</p>
        </Link>
      }
      </div>
    </nav>
  )
}

export default Header;
