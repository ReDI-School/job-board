import Save from '@material-ui/icons/Save';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import React, { ReactElement } from 'react';
import Typography from '@material-ui/core/Typography';

import { useParams } from 'react-router';
import { useFetchJob } from '../api/useFetch';
import FetchWrapper from '../components/FetchWrapper';
import PageLayout from '../layouts/PageLayout';
import { IJob } from '../types';
import { formatDate } from '../utils';
import CompanyInfo from '../components/jobInfo/CompanyInfo';
import JobTagsList from '../components/jobInfo/JobTagsList';
import CommunityOnlyBadge from '../components/jobInfo/CommunityOnlyBadge';

interface Props {
  jobId: string;
}


/** Page that displays the job for the provided jobId */
function JobPage({ jobId }: Props): ReactElement {
  const result = useFetchJob(jobId);
  return (
    <PageLayout>
      <Container>
        <Box paddingY={2}>
          <FetchWrapper {...result}>
            {({ data }: { data: IJob }) => (
              <Card>
                {/* everything ok? so render the job posting as card */}
                <CardHeader
                  /* avatar={data?.icon ? <Avatar>A</Avatar> : null} */
                  title={
                    <Box>
                      <Box display="flex" alignItems="center" flexWrap="wrap">
                        <Typography variant="h5">
                          {data.header || 'no header found'} 
                        </Typography>
                        <CommunityOnlyBadge isCommunityOnly={true}/>
                      </Box>
                      
                      <CompanyInfo companyName={data.company_name} companyLocation={data.location}/>
                      <JobTagsList job={data}/>
                    </Box>
                  }
                  action={
                  <Button
                    href={data.application_link}
                    target="_blank"
                    variant="contained"
                    color="primary"
                    startIcon={<Save />}
                  >
                    Apply
                  </Button>
                  }
                />
                <CardContent>
                  <Box>

                    <Typography>

                    </Typography>
                  </Box>
                  {/* you could use the library react-html-parser too but: its
                  pretty outdated (needs polyfills and different react version /
                  -force flag)*/}
                  {data.content && (
                    <Typography component="div" dangerouslySetInnerHTML={{ __html: data.content }} />
                  )}
                  <Box marginTop={2}> {/* make this some fancy component */}
                    <Typography>Added <strong>{formatDate(data.timestamp)}</strong> by {data.poster || "Anon"}</Typography>
                  </Box>
                  {data.deadline && <Typography>
                    Deadline: <strong>{data.deadline}</strong>
                  </Typography>}
                  {data.source && <Typography>
                    Source: <strong>{data.source}</strong>
                  </Typography>}
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
