import { RegisterInput, useRegisterMutation } from 'generated/graphql';
import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
  const { register, handleSubmit, watch, errors } = useForm<RegisterInput>({
    mode: 'onBlur',
  });

  const onSubmit = (data: RegisterInput) => console.log(data);

  return (
    <div className='mt-16 w-full flex flex-col items-center'>
      <div className='w-full max-w-xs'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        >
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='text'
              placeholder='e.g. dhencio@g.com'
              name='email'
              ref={register}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='username'
            >
              Username
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='e.g. dhencio@g.com'
              name='username'
              ref={register}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <input
              className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='******************'
              name='passowrd'
              ref={register}
            />
            <p className='text-red-500 text-xs italic'>
              Please choose a password.
            </p>
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='confirmPassword'
            >
              Confirm Password
            </label>
            <input
              className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='confirmPassword'
              type='password'
              name='confirmPassword'
              placeholder='******************'
              ref={register}
            />
            <p className='text-red-500 text-xs italic'>
              Please choose a password.
            </p>
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Sign up
            </button>
          </div>
        </form>
        <p className='text-center text-gray-500 text-xs'>
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Register;
