import gql from 'graphql-tag';

export const CREATE_POST_MUTATION = gql`
  mutation CreatePost($body: String!) {
    createPost(body: $body) {
      id
      body
      username
      createdAt
      likes {
        id
        createdAt
        username
      }
      comments {
        id
        body
        username
        createdAt
      }
      likeCount
      commentCount
    }
  }
`;
