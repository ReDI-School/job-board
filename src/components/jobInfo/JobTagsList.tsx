import Typography from '@material-ui/core/Typography'
import React, { ReactElement } from 'react'
import { IJob } from '../../types'
import { jobFieldFormatters } from '../../utils'

interface Props {
    job: IJob
}

const tagKeys=["community_only","experience", "employment_time", "language"]

const createListString=(jobData: any, keys: string[], formatters?: any)=>{
    let keyWithValCount=0;
    let output="";
    keys.forEach((key:string)=>{
        const data=jobData[key];
        const formattedData=formatters && formatters[key]? formatters[key](data) :  data;
        if(formattedData){
            keyWithValCount? output+=` - ${formattedData}` : output+=formattedData;
            keyWithValCount++;
        }
    })
    return output;
}

function JobTagsList({job}: Props): ReactElement {
    return (
        <Typography variant="subtitle2">
            {createListString(job, tagKeys, jobFieldFormatters)}
        </Typography>
    )
}

export default JobTagsList
