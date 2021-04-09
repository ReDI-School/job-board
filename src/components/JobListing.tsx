import React from 'react'
import { IJob } from '../types'

interface Props {
  job: IJob
}

const JobListing = ({ job }: Props) => {
  return <article>
    <h2>{job.header}</h2>
    <div>{job.content}</div>
    <div>{job.employment_time}</div>
    <div>{job.experience}</div>
    <div>{job.community_only}</div>
    <div>{job.timestamp}</div>
  </article>
}

export default JobListing
