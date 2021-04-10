import React from "react";
import { IJob } from "../types";
import Card from "./Card";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import WorkIcon from "@material-ui/icons/Work";
import PostAddIcon from "@material-ui/icons/PostAdd";
import PeopleIcon from "@material-ui/icons/People";
import { Typography } from "@material-ui/core";
import { formatDate } from "../utils";
import { useHistory } from "react-router";

interface Props {
  job: IJob;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //maxWidth: 960,
    },
    chip: {
      margin: "10px 10px 10px 0",
      textTransform: "capitalize",
    },
    date: {
      position: "absolute",
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
    <article className={classes.root}>
      <Card
        title={job.header}
        description={job.content}
        onActionClicked={() => history.push(`/job/${job.id}`)}
      >
        <Chip
          className={classes.chip}
          label={job.employment_time}
          color="primary"
        />
        <Chip className={classes.chip} label={job.experience} />
        {job.community_only === "true" && (
          <Chip
            className={classes.chip}
            icon={<PeopleIcon fontSize="small" />}
            label={"Community Only"}
            color="secondary"
          />
        )}
        <Typography variant="caption" className={classes.date}>
          {formatDate(job.timestamp)}
        </Typography>
      </Card>
    </article>
  );
};

export default JobListing;
