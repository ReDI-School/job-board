import Box from "@material-ui/core/Box";
import React, { PropsWithChildren } from "react";

const NotFoundView = ({
  children = <Box textAlign="center">Page could not be found</Box>,
}: PropsWithChildren<{}>) => {
  return (
    <Box>
      <Box textAlign="center">banner</Box>
      {children}
    </Box>
  );
};

export default NotFoundView;
