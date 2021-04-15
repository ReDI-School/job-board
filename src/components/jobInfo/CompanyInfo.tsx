import Typography, { TypographyProps } from '@material-ui/core/Typography'
import React, { ReactElement } from 'react'

interface Props {
    companyName?: string;
    companyLocation?: string;
    typographyProps?: TypographyProps
}

function CompanyInfo({companyName, companyLocation, typographyProps}: Props): ReactElement {
    if(companyName && companyLocation) return <Typography variant="subtitle2" {...typographyProps}>{companyName} - {companyLocation}</Typography>
    if(companyName) return <Typography variant="subtitle2" {...typographyProps}>{companyName}</Typography>
    if(companyLocation) return <Typography variant="subtitle2" {...typographyProps}>{companyLocation}</Typography>
    return null;
}

export default CompanyInfo
