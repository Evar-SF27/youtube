import React from 'react'
import * as ROUTES from '../constants/routes'
import SearchBar from './searchBar'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import zIndex from '@mui/material/styles/zIndex'

const Navbar = () => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      p={2}
      sx={{ 
        position: 'sticky', 
        background: '#000', 
        top: 0, 
        justifyContent: 'space-between',
        borderBottom: '2px solid #3d3d3d',
        zIndex: 10000
      }}
    >
      <Link to={ROUTES.FEED} style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar
