import React from 'react'
import * as ROUTES from './constants/routes'
import { Navbar, Feed, ChannelDetail, VideoDetail, SearchFeed } from './components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

const App = () => {
  return (
    <Router>
        <Box sx={{ backgroundColor: '#000'}}>
            <Navbar />
            <Routes>
                <Route path={ROUTES.FEED} exact element={<Feed />} />
                <Route path={ROUTES.VIDEO} exact element={<VideoDetail />} />
                <Route path={ROUTES.CHANNEL} exact element={<ChannelDetail />} />
                <Route path={ROUTES.SEARCH} exact element={<SearchFeed />} />
            </Routes>
        </Box>

    </Router>
  )
}

export default App
