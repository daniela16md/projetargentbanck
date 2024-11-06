import React, { useState } from 'react';


function Editname() {
  const [display, setDisplay] = useState(true);
  const displayEdit = () => {
    setDisplay(!display);
  };

  return (
    <div className='editname'>
      {display ? (
        <div>
          <h1 className='editnameh1'>Welcome back <br />"firstName lastName"</h1>
          <button className='edith2' onClick={displayEdit}>Edit name</button>
        </div>
      ) : (
        <div>
          <h2 className='edith2'>Edit user infos</h2>
          <form>
            <div className='edit-input'>
              <label htmlFor="userName">User name:</label>
              <input
                type="text"
                id="userName"
                value="name" 
                
              />
            </div>
            <div className='edit-input'>
              <label htmlFor="firstName">First name:</label>
              <input
                type="text"
                id="firstName"
                value="firstName" 
                readOnly
              />
            </div>
            <div className='edit-input'>
              <label htmlFor="lastName">Last name:</label>
              <input
                type="text"
                id="lastName"
                value="lastName" 
                readOnly
              />
            </div>
            <div className='buttons'>
              <button type="submit" className="edit-button">Save</button>
              <button type="button" className="edit-button" onClick={displayEdit}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Editname;
