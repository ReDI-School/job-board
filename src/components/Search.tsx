import  Box  from '@material-ui/core/Box'
import React from 'react'



const Search = () => {
    return (
        <Box display="flex" flexWrap="wrap" justifyContent="space-between">
            <Box>
                filters
            </Box>
            <Box>
                sort
            </Box>
        </Box>
    )
}

export default Search
