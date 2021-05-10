import React from 'react';
import PageLayout from '../layouts/PageLayout';
import Container from '@material-ui/core/Container';
import PaginatedJobFeed from '../components/PaginatedJobFeed';


const Home = () => {
  return (
    <PageLayout>
      <Container>
        <PaginatedJobFeed pageSize={3}/>
      </Container>
    </PageLayout>
  );
};

export default Home;
