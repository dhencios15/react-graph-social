import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import {
  CardWrapper,
  CardHeader,
  CardBody,
  CardFooter,
  CardButton,
} from './Card.styles';
import { Link } from 'react-router-dom';
import { AuthContext } from 'context/authContext';
import { gql, useMutation } from '@apollo/react-hooks';

const Card = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (user && post.likes.find((like) => like.username === user.username)) {
      setLiked(true);
    } else setLiked(false);
  }, [user, post.likes]);

  const LIKE_POST_MUTATION = gql`
    mutation LikePost($postId: ID!) {
      likePost(postId: $postId) {
        id
        likes {
          id
          username
        }
        likeCount
      }
    }
  `;

  const [likePost] = useMutation(LIKE_POST_MUTATION, {
    variables: { postId: post.id },
  });

  const likeButton = user ? (
    liked ? (
      <CardButton onClick={likePost} user={user}>
        Like {post.likeCount}
      </CardButton>
    ) : (
      <CardButton onClick={likePost}>Like {post.likeCount}</CardButton>
    )
  ) : (
    <Link
      to={`/login`}
      className='inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2 cursor-pointer'
    >
      Like {post.likeCount}
    </Link>
  );

  const commentPost = () => {
    console.log('COMMENTED');
  };
  return (
    <CardWrapper>
      <CardHeader>
        <div className='font-bold text-base mb-2 block'>
          {post.username}
          <Link to={`/posts/${post.id}`} className='block text-xs font-thin'>
            {moment(post.createdAt).fromNow(true)}
          </Link>
        </div>
        <img
          className='w-8 h-8 rounded-full'
          src='https://image.shutterstock.com/z/stock-vector-boy-disguised-with-a-mask-of-fake-nose-mustache-and-glasses-profile-avatar-cartoon-character-vector-1415015891.jpg'
          alt='Avatar of Jonathan Reinink'
        />
      </CardHeader>
      <CardBody>
        <p className='text-gray-700 text-base'>{post.body}</p>
      </CardBody>
      <CardFooter>
        {/* <CardButton onClick={likePost}>Likes (2)</CardButton>
         */}
        {likeButton}
        <CardButton onClick={commentPost}>
          Comment {post.commentCount}
        </CardButton>
      </CardFooter>
    </CardWrapper>
  );
};

export default Card;
