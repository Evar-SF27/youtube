import React, { useEffect, useState } from 'react'
import { Typography, Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import { Fetch } from '../utils'
import { Video, Loader } from './'

const Search = () => {
    const [videos, setVideos] = useState(null);
    const { searchTerm } = useParams();

    useEffect(() => {
      Fetch(`search?part=snippet&q=${searchTerm}`)
        .then((data) => setVideos(data.items))
    }, [searchTerm]);

    return (
      <Box p={2} minHeight='95vh'>
        <Typography 
          variant='h4' 
          fontWeight={900}  
          color='white' 
          mb={3} 
          ml={{ sm: '100px'}}
        >
          Results for <span style={{ color: '#FC1503' }}>{searchTerm}</span> videos
        </Typography>
        <Box display='flex'>
          <Box sx={{ mr: { sm: '100px' } }}/>
          {!videos ? <Loader /> : <Video videos={videos} />}
        </Box>
      </Box>
    )
}

export default Search
