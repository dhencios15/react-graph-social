import { useQuery } from '@apollo/react-hooks';
import React from 'react';

import { FETCH_POST_QUERY } from 'graphql/queries/getPost';
import { PostListWrapper } from './PostList.styles';
import Card from '../Card';

const PostList = () => {
  const { loading, data } = useQuery(FETCH_POST_QUERY);
  if (loading) return <div>Loading...</div>;
  return (
    <PostListWrapper>
      {data && data.getPosts.map((post) => <Card key={post.id} post={post} />)}
    </PostListWrapper>
  );
};

export default PostList;
