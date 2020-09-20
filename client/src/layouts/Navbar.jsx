import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-lightslategray-900 py-4 px-10 shadow-md'>
      <NavLink to='/' className='text-2xl text-gray-400 font-bold select-none'>
        SOCIAL
      </NavLink>
      <div className='text-sm text-gray-400 font-bold'>
        <NavLink to='/login' className='hover:text-gray-300 focus:outline-none'>
          SIGN IN
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
