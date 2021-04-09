import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    margin: 15,
    position: 'relative'
  },
});

interface Props {
  title?: string,
  description?: string,
  children: any,
}

const SimpleCard = ({ title, description, children }: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        {title &&
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        }
        {description &&
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        }
        {children}
      </CardContent>
      <CardActions>
        <Button size="small">More</Button>
      </CardActions>
    </Card>
  );
}

export default SimpleCard
