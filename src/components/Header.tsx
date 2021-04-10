import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import MenuIcon from '@material-ui/icons/Menu';
import PublishIcon from "@material-ui/icons/Publish";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            ReDi Community Job Board
          </Typography>
          <Button
            variant="contained"
            color="default"
            startIcon={<PublishIcon />}
          >
            Publish Job Listing
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
