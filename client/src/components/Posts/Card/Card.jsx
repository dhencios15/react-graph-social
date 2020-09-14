import React from 'react';
import moment from 'moment';
import {
  CardWrapper,
  CardHeader,
  CardBody,
  CardFooter,
  CardButton,
} from './Card.styles';
import { Link } from 'react-router-dom';

const Card = ({ post }) => {
  const likePost = () => {
    console.log('LIKED');
  };
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
        <CardButton onClick={likePost}>Likes (2)</CardButton>
        <CardButton onClick={commentPost}>Comments (5)</CardButton>
      </CardFooter>
    </CardWrapper>
  );
};

export default Card;
