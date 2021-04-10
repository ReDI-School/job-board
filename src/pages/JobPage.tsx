import React, { ReactElement } from "react";
import { useParams } from "react-router";

interface Props {
  jobId: string | number;
}

/** Page that displays the job for the provided jobId */
function JobPage({ jobId }: Props): ReactElement {
  return <div>{jobId}</div>;
}

/** Wrapper that renders JobPage with jobId taken from router params */
export function JobPageRoute(): ReactElement {
  // feel free to remove this wrapper or move it to the routes directory
  const { jobId } = useParams<{ jobId: string }>();
  return <JobPage jobId={jobId} />;
}

export default JobPage;
