import Box from "@material-ui/core/Box";
import React from "react";
import NotFoundView from "../components/NotFoundView";

interface Props {}

const NotFoundPage = (props: Props) => {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <NotFoundView />
    </Box>
  );
};

export default NotFoundPage;
