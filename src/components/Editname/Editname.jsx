import React, { useState } from 'react';


function Editname() {
  const [display, setDisplay] = useState(true);
  const displayEdit = () => {
    setDisplay(!display);
  }
  return (
    <div className='editname'>
      { display ? ( 
        <div>
          <h1 className='editnameh1'>Welcome back <br />Nom Prenom</h1>
          <button className='edith2' onClick={displayEdit}>Edit name</button>
        </div>
        ) : ( 
          <div>
          <h2 className='edith2'> Edit user infos</h2>
          <form action="">
            <div className='edit-input'>
              <label htmlFor="userName">User name:</label>
              <input
                type="text"
                id="userName"
                value="" readOnly
              />
            </div>
            <div className='edit-input'>
              <label htmlFor="firstName">First name:</label>
              <input
                type="text"
                id="userName"
                value=""readOnly
              />
            </div>
            <div className='edit-input'>
              <label htmlFor="lastName">Last name:</label>
              <input
                type="text"
                id="userName"
                value=""readOnly
              />
            </div>
            <div className='buttons'>
              <button type="submit" className="edit-button">Save</button>
              <button type="submit" className="edit-button" onClick={displayEdit}>Cancel</button>
            </div>
            
          </form>
        </div>
      )}
    </div>
  )
}

export default Editname