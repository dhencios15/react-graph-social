import React from 'react';
import Posts from 'components/Posts';
import { FETCH_POST_QUERY } from 'graphql/queries/getPost';
import { useQuery } from '@apollo/react-hooks';

const Home = () => {
  const { loading, data } = useQuery(FETCH_POST_QUERY);
  if (loading) return <div>Loading...</div>;
  const { getPosts } = data;
  return (
    <main className='container px-5 py-24 mx-auto'>
      <div className='flex flex-wrap -m-4'>
        {getPosts.map((post) => (
          <Posts key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
};

export default Home;
