import {
    Box,
    Card,
    CardContent,
    CardHeader,
    CircularProgress,
    Container,
    Typography,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Save } from '@material-ui/icons';
import React, { ReactElement } from 'react';
import { useParams } from 'react-router';
import { useFetchJob } from '../api/useFetch';
import PageLayout from '../layouts/PageLayout';

interface Props {
  jobId: string;
}

/** Page that displays the job for the provided jobId */
function JobPage({ jobId }: Props): ReactElement {
    const { data, isLoading, hasError, errorMessage } = useFetchJob(jobId);
    return (
        <PageLayout>
            <Container>
                <Box paddingY={2}>
                    {isLoading ? (
                        <CircularProgress />
                    ) : hasError ? (
                        <Typography>
              could not load data check console for more information
                        </Typography>
                    ) : data ? (
                        <Card>
                            {/* everything ok? so render the job posting as card */}
                            <CardHeader
                                title={data.header || 'no job header found'}
                                action={
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        startIcon={<Save />}
                                    >
                    Save
                                    </Button>
                                }
                            />
                            <CardContent>
                                {data.content || 'could not find job description'}
                            </CardContent>
                        </Card>
                    ) : (
                        <Typography>could not find item with the provided id</Typography>
                    )}
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
