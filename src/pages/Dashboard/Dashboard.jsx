import React from 'react';
import Dashboardcontent from '../../components/Dashboardcontent/Dashboardcontent';
import Editname from '../../components/Editname/Editname';
import './Dashboard.css'

function dashboard() {
  return (
    <div className='useraccount'>
      <div className='editname'> 
       <Editname />
      </div>
      <Dashboardcontent />
    </div>
  )
}

export default dashboard