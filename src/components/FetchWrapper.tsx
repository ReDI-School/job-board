import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import React, { ReactElement, PropsWithChildren } from "react";

interface IProps {
  isLoading: boolean;
  error: any;
  data: any;
  children(data: any, props?: any): ReactElement; // no strings or numbers allowed
  props?: any;
}

/** wrapper that handles loading and error for components that need fetched data before rendering.
 * Child that gets passed need to have a data prop all other optional props will be passed down too
 */
function FetchWrapper({
  isLoading,
  error,
  data,
  children,
  props,
}: IProps): ReactElement {
  if (isLoading) return <CircularProgress />;
  if (error)
    return (
      <Typography>
        could not load data check console for more information
      </Typography>
    );
  if (!isLoading && data) return children({ data, ...props });
  return <Typography>could not find item with the provided id</Typography>;
}

export default FetchWrapper;
