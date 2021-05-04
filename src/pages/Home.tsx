import React from 'react';
import PageLayout from '../layouts/PageLayout';
import JobListing from '../components/JobListing';
import { IJob } from '../types';
import { useFetchJobs } from '../api/useFetch';
import Container from '@material-ui/core/Container';

const Home = () => {
  const result = useFetchJobs();

  const { data, isLoading } = result;
  const jobs = data;

  return (
    <PageLayout>
      <Container>
        {
          jobs
            ? jobs.map((job: IJob) => <JobListing job={job} key={job.id} />)
            : isLoading
              ? 'Loading job listings'
              : 'No jobs found'
        }
      </Container>
    </PageLayout>
  );
};

export default Home;
