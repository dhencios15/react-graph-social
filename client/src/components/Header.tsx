import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className='bg-indigo-700 w-full flex justify-between items-center border-b-4 border-pink-500 px-48 py-3'>
    <NavLink to='/' className='font-bold text-indigo-300 text-lg select-none'>
      SOCIAL
    </NavLink>
    <div className='text-indigo-200 font-semibold uppercase'>
      <NavLink
        activeClassName='border-b-4 border-indigo-200'
        className='hover:text-indigo-400 mr-3'
        to='/login'
      >
        Login
      </NavLink>
      <NavLink
        activeClassName='border-b-4 border-indigo-200'
        className='hover:text-indigo-400'
        to='/register'
      >
        Register
      </NavLink>
    </div>
  </header>
);

export default Header;
