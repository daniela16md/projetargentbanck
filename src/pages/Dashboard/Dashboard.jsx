import React from 'react';
import Dashboardcontent from '../../components/Dashboardcontent/Dashboardcontent';
import Editname from '../../components/Editname/Editname';
import './Dashboard.css'

function Dashboard() {
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