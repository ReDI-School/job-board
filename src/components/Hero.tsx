import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField  from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
       backgroundColor: '#e0e0e0'
    },
    grid: {
      marginTop: '2rem',
      marginLeft: '15rem'
    },
    textField: {
      width: '35em',
      marginLeft: '15rem'
    },
    formGroup:{
      marginLeft: '14rem',
      marginTop: '2rem'
    }
  })
);

const Hero = () => {
  const classes = useStyles();


  return (
    <Grid container
      className={classes.root}
      direction="column"
    >
      <Grid item
        className={classes.grid}>
        <Typography variant='h3' color="secondary">Filter</Typography>
    </Grid>
    <Grid item >
        <TextField
          className={classes.textField}
          placeholder="Search Job"
          InputProps={{endAdornment:
           <InputAdornment position="end">
           <AddIcon color="secondary"/>
           </InputAdornment>
          }}/>
    </Grid>
      <Grid item
        className={classes.formGroup}>
        <FormGroup row>
          <FormControlLabel
            control={<Switch/>}
            label="Full Time"
            labelPlacement="start"
          />
          <FormControlLabel
            control={<Switch/>}
            label="Part Time"
            labelPlacement="start"
          />
          <FormControlLabel
            control={<Switch/>}
            label="Internship"
            labelPlacement="start"
          />
        </FormGroup>
      </Grid>
    </Grid>

  );
};

export default Hero;
