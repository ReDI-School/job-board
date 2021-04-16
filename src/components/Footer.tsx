import Container from '@material-ui/core/Container';
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor:'#757575'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: '',
      backgroundColor:'#757575',

    },
  }),
);

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs>
          <Grid container spacing={1}>
            <Grid item xs> <Paper className={classes.paper}>imprint</Paper></Grid>
            <Grid item xs> <Paper className={classes.paper}>@copyright</Paper></Grid>
            <Grid item xs> <Paper className={classes.paper}>Red school</Paper></Grid>
          </Grid>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>icons?</Paper>
        </Grid>
      </Grid>


    </div>
  );
};

export default Footer;
