import React from 'react';

import { HomeWrapper } from './Home.styles';

import PostContainer from 'components/Posts';
import Navbar from 'layout/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeWrapper>
        <PostContainer />
      </HomeWrapper>
    </>
  );
};

export default Home;
