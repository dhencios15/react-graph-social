import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarWrapper } from './Navbar.styles';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className='font-semibold text-gray-300'>
        <NavLink exact to='/'>
          SOCIAL
        </NavLink>
      </div>
      <div className='font-semibold text-gray-300'>
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
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
