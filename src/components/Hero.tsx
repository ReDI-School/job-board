import React from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme} from '@material-ui/core/styles'
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment'
import AddIcon from '@material-ui/icons/Add'


const useStyles = makeStyles(theme=>({}))

const Hero=()=> {
  const classes = useStyles()
  const theme = useTheme()

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });


  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };


  return (
    <Grid container direction="column">
     <Grid item style={{ marginTop: "2rem", marginLeft: "15rem"}}>
       <Typography variant='h3' color="secondary">Filter</Typography>
     </Grid>
     <Grid item >
      <TextField
      placeholder="Search Job"
      style={{width: "35em", marginLeft: "15rem"}}
      InputProps={{endAdornment:
      <InputAdornment position="end">
       <AddIcon color="secondary"/>
      </InputAdornment>
      }}/>
     </Grid>
     <Grid item style={{marginLeft:"14rem", marginTop:"2rem"}}>
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

  )
}

export default Hero
