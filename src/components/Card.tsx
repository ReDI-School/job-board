import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Sanitize from './Sanitize';

const useStyles = makeStyles({
  root: {
    margin: '15px 0',
    position: 'relative',
  },
});

interface Props {
  title?: string;
  description?: string;
  children: any;
  onActionClicked?: () => void;
}

const SimpleCard = ({
  title,
  description,
  children,
  onActionClicked,
}: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        {title && (
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        )}
        {description && (
          <Typography variant="body2" color="textSecondary" component="p">
            <Sanitize inline htmlOrMarkdown={description} />
          </Typography>
        )}
        {children}
      </CardContent>
      <CardActions onClick={onActionClicked}>
        <Button color="primary" variant="contained" >More</Button>
      </CardActions>
    </Card>
  );
};

export default SimpleCard;
