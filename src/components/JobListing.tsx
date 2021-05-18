import React from 'react';
import { IJob } from '../types';
import Card from './Card';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import PeopleIcon from '@material-ui/icons/People';
import Typography from '@material-ui/core/Typography';
import { formatDate } from '../utils';
import { useHistory } from 'react-router';

interface Props {
  job: IJob;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      //maxWidth: 960,
    },
    chip: {
      margin: '10px 10px 10px 0',
      textTransform: 'capitalize',
    },
    date: {
      position: 'absolute',
      top: 0,
      right: 0,
      margin: 10,
      opacity: 0.8,
    },
  })
);

const JobListing = ({ job }: Props) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <article className={classes.root} data-testid="job" >
      <Card
        title={job.header}
        description={job.content.substring(0, 260)}
        onActionClicked={() => history.push(`/job/${job.id}`)}
      >
        {<Chip
          className={classes.chip}
          label={job.employment_type}
          color="secondary"
        />}
        {job.experience_level && <Chip className={classes.chip} label={job.experience_level} />}
        {job.redi_community_only === 'true' && (
          <Chip
            className={classes.chip}
            icon={<PeopleIcon fontSize="small" />}
            label={'Community Only'}
            color="primary"
          />
        )}
        {job.zeitstempel && <Typography variant="caption" className={classes.date}>
          {formatDate(job.zeitstempel)}
        </Typography>}
      </Card>
    </article>
  );
};

export default JobListing;
