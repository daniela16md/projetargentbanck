import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../../redux/userSlice';

function Editname() {
  const [display, setDisplay] = useState(true);
  const [userNameInput, setUserNameInput] = useState('');
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const { userName, firstName, lastName } = useSelector((state) => state.user);

  useEffect(() => {
    setUserNameInput(userName);
  }, [userName]);

  const displayEdit = () => {
    setDisplay(!display);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      console.error('No token found');
      return;
    }
    try {
      const updatedUserData = {
        userName: userNameInput, 
      };
      await dispatch(updateUserProfile(updatedUserData));
      setDisplay(true);
    } catch (error) {
      console.error('Erreur lors de la mise à jour:', error);
      alert('Une erreur est survenue lors de la mise à jour.');
    }
  };

  return (
    <div className='editname'>
      {display ? (
        <div>
          <h1 className='editnameh1'>
            Welcome back <br /> {userName || ''}
          </h1>
          <button className='edith2' onClick={displayEdit}>Edit name</button>
        </div>
      ) : (
        <div>
          <h2 className='edith2'> Edit user infos</h2>
          <form onSubmit={handleSubmit}>
            <div className='edit-input'>
              <label htmlFor="userName">User name:</label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={userNameInput}
                onChange={(e) => setUserNameInput(e.target.value)} 
              />
            </div>
            <div className='edit-input'>
              <label htmlFor="firstName">First name:</label>
              <input
                type="text"
                id="firstname"
                name="firstName"
                value={firstName} 
                readOnly
              />
            </div>
            <div className='edit-input'>
              <label htmlFor="lastName">Last name:</label>
              <input
                type="text"
                id="lastname"
                name="lastName"
                value={lastName} 
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
