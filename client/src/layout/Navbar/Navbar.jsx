import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarWrapper } from './Navbar.styles';

import { AuthContext } from 'context/authContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const notLoggedIn = () => {
    return (
      <>
        <NavLink
          to='/login'
          exact
          className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold text-sm hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4'
        >
          SIGN IN
        </NavLink>
        <NavLink
          to='/register'
          exact
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  text-sm border border-blue-700 rounded'
        >
          SIGN UP
        </NavLink>
      </>
    );
  };
  return (
    <NavbarWrapper>
      <div className='font-semibold text-gray-300'>
        <NavLink exact to='/'>
          {user ? user.username : 'SOCIAL'}
        </NavLink>
      </div>
      <div className='font-semibold text-gray-300'>
        {user ? (
          <>
            <NavLink
              to='/login'
              exact
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  text-sm border border-blue-700 rounded'
              onClick={logout}
            >
              SIGN OUT
            </NavLink>
          </>
        ) : (
          notLoggedIn()
        )}
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
