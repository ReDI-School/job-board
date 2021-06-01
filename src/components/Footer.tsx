import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
//import {Link} from 'react-router-dom';
import Facebook from '@material-ui/icons/Facebook';
import Tweeter from '@material-ui/icons/Twitter';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

interface IProps {
  containerMaxWidth?:  false | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
   
    link: {
      color: '#333',
      fontFamily: 'Arial',
      fontSize: '1rem',
      textDecoration: 'none'
    },
    icon: {
      color: '#333',
      marginRight: '0.3em'
    }
  }),
);

const Footer = ({containerMaxWidth='lg'}: IProps) => {
  const classes = useStyles();
  return (
    <Box component="footer" mt={8} py={2} boxShadow={4} >
      <Container maxWidth={containerMaxWidth}>
        <Grid container justify='space-between'>
          <Grid item className={classes.link} >
            <Hidden mdDown>
              <Grid container justify='space-around' spacing={2}>
                <Grid item  /*component={Link} to="/"*/ >
                Home</Grid>
                <Grid item  /*component={Link} to="/About"*/ >
                Redi School</Grid>
                <Grid item  /*component={Link} to="/Redi"*/ >
                Copyright</Grid>
              </Grid>
            </Hidden>
          </Grid>
          <Grid item className={classes.link} >
            <Grid container>
              <Grid item component={'a'} href="https://www.facebook.com/search/top?q=redi%20school%20of%20digital%20integration"
                rel="noopener noreferrer" target="_blank">
                <Facebook className={classes.icon} />
              </Grid>
              <Grid item component={'a'} href="https://twitter.com/ReDISchool"
                rel="noopener noreferrer" target="_blank">
                <Tweeter className={classes.icon} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
