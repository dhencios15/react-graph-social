import { useQuery } from '@apollo/react-hooks';
import { AuthContext } from 'context/authContext';
import gql from 'graphql-tag';
import React, { useContext } from 'react';
import { CardButton } from 'components/Posts/Card/Card.styles';
const FETCH_POST_QUERY = gql`
  query getPost($postId: ID!) {
    getPost(postId: $postId) {
      id
      username
      body
      createdAt
      likes {
        id
        username
        createdAt
      }
      likeCount
      comments {
        username
        body
      }
      commentCount
    }
  }
`;

const SinglePost = (props) => {
  const postId = props.match.params.postId;
  console.log(postId);
  const { user } = useContext(AuthContext);
  const { loading, data } = useQuery(FETCH_POST_QUERY, {
    variables: { postId },
  });
  let markUp;
  if (loading) {
    markUp = <p>Loading....</p>;
  } else {
    const {
      id,
      body,
      createdAt,
      username,
      comments,
      likes,
      likeCount,
      commentCount,
    } = data.getPost;
    console.log(data.getPost);

    markUp = (
      <div className='px-5 mx-auto flex'>
        <div className='flex flex-col sm:flex-row'>
          <div className='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
            <div className='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400'>
              <img
                className='rounded-full'
                src='https://image.shutterstock.com/z/stock-vector-boy-disguised-with-a-mask-of-fake-nose-mustache-and-glasses-profile-avatar-cartoon-character-vector-1415015891.jpg'
                alt='Avatar of Jonathan Reinink'
              />
            </div>
            <div className='flex flex-col items-center text-center justify-center'>
              <h2 className='font-medium title-font mt-4 text-gray-900 text-lg'>
                {username}
              </h2>
              <div className='w-12 h-1 bg-indigo-500 rounded mt-2 mb-4'></div>
              <p className='text-base text-gray-600'>{createdAt}</p>
            </div>
          </div>
          <div className='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
            <p className='leading-relaxed text-lg mb-4'>{body}</p>
            <div className='text-indigo-500 inline-flex items-center'>
              <CardButton>Likes {likeCount} </CardButton>
              <CardButton>Comments {commentCount} </CardButton>
            </div>
            {comments.map((comment) => (
              <div className='flex border-2 rounded-lg border-gray-200 p-8 flex-col w-1/2'>
                <div className='flex-grow'>
                  <h2 className='text-gray-900 text-sm title-font font-medium mb-3'>
                    {comment.username}
                  </h2>
                  <p className='leading-relaxed text-sm'>{comment.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return markUp;
};

export default SinglePost;
