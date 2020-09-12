import React from 'react';
import PostContainer from './Posts';

const App = () => {
  return (
    <div className='flex flex-col items-center bg-gray-300 h-screen'>
      <div className='flex justify-between items-center h-20 w-full bg-gray-800 shadow-lg px-6'>
        <div className='font-semibold text-gray-300'>LOGO</div>
      </div>
      <PostContainer />
    </div>
  );
};

export default App;
