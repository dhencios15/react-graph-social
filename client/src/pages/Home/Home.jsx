import React, { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import PostContainer from 'components/Posts';
import { AuthContext } from 'context/authContext';
import { CREATE_POST_MUTATION } from 'graphql/mutations/post';
import { schemaPost } from 'utils/postValidation';
import { FETCH_POST_QUERY } from 'graphql/queries/getPost';

const Home = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schemaPost),
  });
  const { user } = useContext(AuthContext);
  const [createPost, { error }] = useMutation(CREATE_POST_MUTATION, {
    update(proxy, result) {
      const data = proxy.readQuery({
        query: FETCH_POST_QUERY,
      });
      console.log(result);
      data.getPosts = [result.data.createPost, ...data.getPosts];
      proxy.writeQuery({ query: FETCH_POST_QUERY, data });
    },
  });

  const onSubmit = (data, e) => {
    createPost({ variables: data });
    e.target.reset();
  };

  return (
    <>
      {user && (
        <div className='flex -mx-3 mb-6'>
          <form onSubmit={handleSubmit(onSubmit)} className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='body'
            >
              CREATE A POST:
            </label>
            <textarea
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='body'
              ref={register}
              name='body'
            />
            <p className='text-red-500 text-xs italic mb-1'>
              {errors.body?.message || error?.graphQLErrors[0].message}
            </p>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              POST
            </button>
          </form>
        </div>
      )}
      <PostContainer />
    </>
  );
};

export default Home;
