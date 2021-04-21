import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from'@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import {Link} from 'react-router-dom'
import {BottomNavigation,BottomNavigationAction} from '@material-ui/core'
import Facebook from '@material-ui/icons/Facebook'
import Tweeter from '@material-ui/icons/Twitter'
import Instagram from '@material-ui/icons/Instagram'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    footer:{
      backgroundColor: "green",
    },
    mainContainer:{
     position: "absolute"
    },
    link:{
      color: 'gray',
      fontFamily: 'Arial',
      fontSize: "1rem",
      textDecoration:'none'

    },
    icon:{
        color:'#DADADA',
        "&:hover":{
          fill:"#F08c66",
          fontSize:"1.8rem"
        }
    }
  }),
);

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container justify="space-around"  className={classes.mainContainer}>
        <Grid item className={classes.link} >
         <Hidden mdDown>
          <Grid container justify="space-around" spacing={2}>
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
