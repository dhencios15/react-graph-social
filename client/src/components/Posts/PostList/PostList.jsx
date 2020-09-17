import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { FETCH_POST_QUERY } from 'graphql/queries/getPost';
import { PostListWrapper } from './PostList.styles';
import Card from '../Card';
import { AuthContext } from 'context/authContext';

const PostList = () => {
  const { loading, data } = useQuery(FETCH_POST_QUERY);
  const { user } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;

  return (
    <PostListWrapper>
      {data &&
        data.getPosts.map((post) => (
          <Card key={post.id} user={user} post={post} />
        ))}
    </PostListWrapper>
  );
};

export default PostList;
