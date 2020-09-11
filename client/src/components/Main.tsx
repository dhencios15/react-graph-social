import React from 'react';
import { Post, useGetPostQuery } from 'generated/graphql';
import Card from './Card/Card';

const Main = () => {
  const { data, loading } = useGetPostQuery();

  if (loading && !data) {
    return <div>Loading...</div>;
  }

  return (
    <main className='mt-16 w-full flex flex-col items-center'>
      <div className='max-w-4xl mx-4 '>
        <h2 className='text-center pb-1 font-bold text-xl text-indigo-700 border-b border-indigo-200'>
          RECENT POST
        </h2>

        <div className='grid grid-cols-3 gap-4'>
          {data &&
            data?.getPosts?.map((post) => (
              <div className='w-full'>
                <div className='flex flex-col h-ful bg-gray-300 mt-4 shadow-lg py-4 px-6 rounded'>
                  <div className='flex justify-between items-center w-full border-b-1 border-gray-500 pb-3 mb-2'>
                    <div className='text-sm'>
                      <p className='text-gray-900 leading-none'>
                        {post?.username}
                      </p>
                      <p className='text-gray-600'>Aug 18</p>
                    </div>
                    <img
                      className='w-10 h-10 rounded-full mr-4'
                      src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
                      alt='Avatar of Jonathan Reinink'
                    />
                  </div>
                  <div className='text-gray-900 mb-2 pb-3 border-b-2 border-gray-400'>
                    {post?.body}
                  </div>
                  <div className='flex'>
                    <div className='bg-gray-200 mr-2 border border-gray-400 py-1 px-4 select-none hover:bg-gray-400 cursor-pointer'>
                      like ({post?.likeCount})
                    </div>
                    <div className='bg-gray-200 border border-gray-400 py-1 px-4 select-none hover:bg-gray-400 cursor-pointer'>
                      comment ({post?.comments.length})
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
