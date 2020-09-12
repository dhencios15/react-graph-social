import gql from 'graphql-tag';

export const FETCH_POST_QUERY = gql`
  {
    getPosts {
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
