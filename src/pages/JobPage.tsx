import {
  /* Avatar, */
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Save } from "@material-ui/icons";
import React, { ReactElement } from "react";

import { useParams } from "react-router";
import { useFetchJob } from "../api/useFetch";
import FetchWrapper from "../components/FetchWrapper";
import PageLayout from "../layouts/PageLayout";
import { IJob } from "../types";

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
                      <Typography variant="h5">
                        {data.header || "no header found"}
                      </Typography>
                      {data.company_name && (
                        <Typography variant="subtitle1">
                          {data.company_name}
                        </Typography>
                      )}
                      {data.location && (
                        <Typography variant="subtitle1">
                          {data.location}
                        </Typography>
                      )}
                    </Box>
                  }
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
                  {/* you could use the library react-html-parser too but: its
                  pretty outdated (needs polyfills and different react version /
                  -force flag)*/}
                  {data.content && (
                    <div dangerouslySetInnerHTML={{ __html: data.content }} />
                  )}
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
