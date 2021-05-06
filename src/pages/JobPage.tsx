import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import React, { ReactElement } from 'react';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';

import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router';
import { useFetchJob } from '../api/useFetch';
import FetchWrapper from '../components/FetchWrapper';
import PageLayout from '../layouts/PageLayout';
import { IJob } from '../types';
import Sanitize from '../components/Sanitize';

interface Props {
  jobId: string;
}

const useStyles = makeStyles({
  logo: {
    display: 'inline-flex',
    marginBottom: '2em',
    img: {
      height: 128,
      width: 128,
      objectFit: 'contain'
    }
  },
  cta: {
    margin: '2em 0',
  }
});

const getDomain = (link: string): string => {
  const url = new URL(link);
  return url.hostname;
};


/** Page that displays the job for the provided jobId */
function JobPage({ jobId }: Props): ReactElement {
  const classes = useStyles();
  const result = useFetchJob(jobId);

  return (
    <PageLayout>
      <Container maxWidth="md">
        <Box paddingY={2}>
          <FetchWrapper {...result}>
            {({ data }: { data: IJob }) => (
              <Card>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <Paper className={classes.logo}>
                        <img src={`https://logo.clearbit.com/${getDomain(data.link)}`} />
                      </Paper>
                      <p>{data.company}</p>
                      <p>Location: {data.location}</p>
                      <p>Level: {data.experience_level}</p>
                      <p>{data.employment_type}</p>
                      <p>Language: {data.language}</p>
                      {
                        data.redi_community_only &&
                        data.redi_community_only.toLowerCase() != 'false' &&
                        <p>
                          <Chip
                            icon={<FaceIcon />}
                            label="Community Only"
                            color="secondary"
                          />
                        </p>
                      }
                      <p className={classes.cta}>
                        <Button variant="contained" color="primary" href={data.source}>
                          Visit offer
                        </Button>
                      </p>
                      {
                        data.poster &&
                        <p>Published by: {data.poster}</p>
                      }
                      {
                        data.contact_person &&
                        <p>Contact: {data.contact_person}</p>
                      }
                    </Grid>
                    <Grid item xs={8}>
                      {
                        data.header &&
                        <h2>
                          {data.header}
                        </h2>
                      }
                      {data.content && (
                        <Sanitize htmlOrMarkdown={data.content} />
                      )}
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            )}
          </FetchWrapper>
        </Box>
      </Container>
    </PageLayout>
  );
}

/** Wrapper that renders JobPage with jobId taken from router params */
export function JobPageRoute(): ReactElement {
  // feel free to remove this wrapper or move it to the routes directory
  const { jobId } = useParams<{ jobId: string }>();
  return <JobPage jobId={jobId} />;
}

export default JobPage;
