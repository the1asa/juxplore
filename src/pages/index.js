import React from 'react';
import PageContainer from '../components/pageContainer';
import PostCard from '../components/postCard/postCard';

export default () => (
  <PageContainer>
    <PostCard title="A blog post" link="/about" />
  </PageContainer>
);
