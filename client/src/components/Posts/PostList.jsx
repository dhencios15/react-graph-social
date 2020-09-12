import { useQuery } from '@apollo/react-hooks';
import React from 'react';

import { FETCH_POST_QUERY } from '#root/graphql/queries/getPost';
import Card from './Card';

const PostList = () => {
  const { loading, data } = useQuery(FETCH_POST_QUERY);
  if (loading) return <div>Loading...</div>;
  return (
    <div className='grid grid-cols-3 gap-4'>
      {data && data.getPosts.map((post) => <Card key={post.id} post={post} />)}
    </div>
  );
};

export default PostList;
