import React from 'react';
import Dashboardcontent from '../../components/Dashboardcontent/Dashboardcontent';
import Editname from '../../components/Editname/Editname';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './Dashboard.css'

function Dashboard() {

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signin'); 
    }
  }, [navigate]); 
  
  return (
    <div className='usersaccount'>
      <div className='editname'> 
       <Editname />
      </div>
      <Dashboardcontent />
    </div>
  )
}

export default Dashboard