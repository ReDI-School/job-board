import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from'@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
//import {Link} from 'react-router-dom';
import Facebook from '@material-ui/icons/Facebook';
import Tweeter from '@material-ui/icons/Twitter';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    mainContainer:{
      position: 'absolute'
    },
    link:{
      color: theme.palette.secondary.main,
      fontFamily: 'Arial',
      fontSize: '1rem',
      textDecoration:'none'

    },
    icon:{
      color:'theme.palette.secondary.main',
      '&:hover':{
        fill:'theme.palette.primary.dark',
        fontSize:'1.3rem'
      }
    }
  }),
);

const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      <Grid container justify='space-around'  className={classes.mainContainer}>
        <Grid item className={classes.link} >
          <Hidden mdDown>
            <Grid container justify='space-around' spacing={2}>
              <Grid item  /*component={Link} to="/"*/ >Home</Grid>
              <Grid item  /*component={Link} to="/About"*/ >Redi School</Grid>
              <Grid item  /*component={Link} to="/Redi"*/ >Copyright</Grid>
            </Grid>
          </Hidden>
        </Grid>
        <Grid item className={classes.link} >
          <Grid container>
            <Grid item /*component={"a"} herf="http://www.facebook.com" rel="noopener noreferrer" target="_blank"*/>
              <Facebook className={classes.icon}/>
            </Grid>
            <Grid item /*component={"a"} herf="http://www.facebook.com" rel="noopener noreferrer" target="_blank"*/>
              <Tweeter className={classes.icon}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
