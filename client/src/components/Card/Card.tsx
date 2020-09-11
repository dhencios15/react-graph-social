import { Post } from 'generated/graphql';
import React from 'react';

const Card = (post: Post) => {
  console.log(post.likeCount);
  return (
    <div className='w-full'>
      <div className='flex flex-col h-ful bg-gray-300 mt-4 shadow-lg py-4 px-6 rounded'>
        <div className='flex justify-between items-center w-full border-b-1 border-gray-500 pb-3 mb-2'>
          <div className='text-sm'>
            <p className='text-gray-900 leading-none'>Jonathan Reinink</p>
            <p className='text-gray-600'>Aug 18</p>
          </div>
          <img
            className='w-10 h-10 rounded-full mr-4'
            src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
            alt='Avatar of Jonathan Reinink'
          />
        </div>
        <div className='text-gray-900 mb-2 pb-3 border-b-2 border-gray-400'>
          post
        </div>
        <div className='flex'>
          <div className='bg-gray-200 mr-2 border border-gray-400 py-1 px-4 select-none hover:bg-gray-400 cursor-pointer'>
            like (2)
          </div>
          <div className='bg-gray-200 border border-gray-400 py-1 px-4 select-none hover:bg-gray-400 cursor-pointer'>
            comment (5)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
