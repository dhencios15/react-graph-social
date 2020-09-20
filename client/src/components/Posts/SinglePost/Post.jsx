import React from 'react';

const Post = () => {
  return (
    <div className='container px-5 py-10 mx-auto flex flex-col'>
      <div className='lg:w-4/6 mx-auto'>
        <div className='flex flex-col sm:flex-row mt-10'>
          <div className='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
            <img
              className='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-500'
              src='https://api.adorable.io/avatars/106/abott@adorable.png'
              alt='Avatar of Jonathan Reinink'
            ></img>
            <div className='flex flex-col items-center text-center justify-center'>
              <h2 className='font-medium title-font mt-4 text-gray-400 text-lg'>
                Phoebe Caulfield
              </h2>
              <div className='w-12 h-1 bg-indigo-500 rounded mt-2 mb-4'></div>
              <p className='text-base text-gray-400'>
                Raclette knausgaard hella meggs normcore williamsburg enamel pin
                sartorial venmo tbh hot chicken gentrify portland.
              </p>
            </div>
          </div>
          <div className='relative sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
            <div className='absolute top-0 right-0 border-b-4 border-dotted border-gray-400 w-5 cursor-pointer mt-2' />
            <p className='leading-relaxed text-lg mb-4 text-gray-300'>
              Meggings portland fingerstache lyft, post-ironic fixie man bun
              banh mi umami everyday carry hexagon locavore direct trade art
              party. Locavore small batch listicle gastropub farm-to-table
              lumbersexual salvia messenger bag. Coloring book flannel truffaut
              craft beer drinking vinegar sartorial, disrupt fashion axe
              normcore meh butcher. Portland 90's scenester vexillologist forage
              post-ironic asymmetrical, chartreuse disrupt butcher paleo
              intelligentsia pabst before they sold out four loko. 3 wolf moon
              brooklyn.
            </p>
            <div className='flex items-center border-t-2 pt-2'>
              <button className='text-gray-400 inline-flex items-center hover:text-gray-300 mr-3'>
                <svg
                  className='w-4 h-4 mr-1'
                  stroke='currentColor'
                  strokeWidth='2'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  viewBox='0 0 24 24'
                >
                  <path d='M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5'></path>
                </svg>
                2
              </button>
              <button className='text-gray-400 inline-flex items-center hover:text-gray-300'>
                <svg
                  className='w-4 h-4 mr-1'
                  stroke='currentColor'
                  strokeWidth='2'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  viewBox='0 0 24 24'
                >
                  <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                </svg>
                50
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
