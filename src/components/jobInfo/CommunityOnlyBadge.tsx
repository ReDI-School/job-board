import { Box, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import SmallLogo from '../../static/redi-logo-small.png'

interface Props {
    isCommunityOnly: boolean;
}

function CommunityOnlyBadge({isCommunityOnly}: Props): ReactElement {
    return isCommunityOnly? (
        <>
            <img style={{height: "2rem", margin: "0 8px"}} src={SmallLogo}/>
            <Typography display="inline" variant="h5">Community Only</Typography>
        </>
    ):null;
}

export default CommunityOnlyBadge
