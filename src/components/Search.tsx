import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import  Box  from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import Select from '@material-ui/core/Select/Select';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 180,
    },
    
  }),
);


const Search = () => {
  const classes = useStyles();
  const history=useHistory();
  const query=new URLSearchParams(history.location.search);
  const [type, setType]=useState(query.get('employment_type') ?? '');
  const [experience, setExperience]=useState(query.get('experience_level') ?? '');
  const [language, setLanguage]=useState(query.get('language') ?? '');

  const setQuery=()=>history.push({ 
    pathname: history.location.pathname,
    search: query.toString(),
  });

  const updateType=(event: React.ChangeEvent<{ value: unknown }>)=>{
    const val=event.target.value as string;
    setType(val);
    if(val){
      query.set('employment_type', val);
    }else query.delete('employment_type');
    setQuery();
  };

  const updateExperience=(event: React.ChangeEvent<{ value: unknown }>)=>{
    const val=event.target.value as string;
    setExperience(val);
    if(val){
      query.set('experience_level', val);
    }else query.delete('experience_level');
    setQuery();
  };

  const updateLanguage=(event: React.ChangeEvent<{ value: unknown }>)=>{
    const val=event.target.value as string;
    setLanguage(val);
    if(val){
      query.set('language', val);
    }else query.delete('language');
    setQuery();
  };

  // maybe make this a modal on mobile 
  return (
    <Box marginTop={2} marginBottom={1} display="flex" flexWrap="wrap" justifyContent="space-between">
      <Box>
        {/* maybe someone feels like splitting this into components */}
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="select-type-label">Employment Type</InputLabel>
          <Select
            variant="outlined"
            labelId="select-type-label"
            id="select-type"
            value={type}
            onChange={updateType}
            label="Employment Type"
              
          >
            <MenuItem value="">
                Any
            </MenuItem>
            <MenuItem value={'Full-Time'}>Full-Time</MenuItem>
            <MenuItem value={'Student Job'}>Student Job</MenuItem>
            <MenuItem value={'Part-Time'}>Part-Time</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="select-experience-label">Experience</InputLabel>
          <Select
            variant="outlined"
            labelId="select-experience-label"
            id="select-experience"
            value={experience}
            onChange={updateExperience}
            label="Employment Type"
              
          >
            <MenuItem value="">
                Any
            </MenuItem>
            <MenuItem value={'Entry-level'}>Entry Level</MenuItem>
            <MenuItem value={'Mid-level'}>Mid Level</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="select-language-label">Language</InputLabel>
          <Select
            variant="outlined"
            labelId="select-language-label"
            id="select-language"
            value={language}
            onChange={updateLanguage}
            label="Language"
              
          >
            <MenuItem value="">
                Any
            </MenuItem>
            <MenuItem value={'English'}>English</MenuItem>
            <MenuItem value={'German'}>German</MenuItem>
          </Select>
        </FormControl>
          
      </Box>
      <Box>
        {/* sort */}
      </Box>
    </Box>
    
  );
};

export default Search;
