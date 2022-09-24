import React, { useState } from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

const SideBar = () => {
    const [selectedCategory, setSelectedCategory] = useState('new')
  return (
    <Stack
      direction='row'
      gap={2}
      sx={{
        overflow: 'auto',
        width: { md: '220px' },
        height: { md: '77vh' },
        ml: 4,
        flexDirection: { md: 'column' },
        padding: '20px 0px',
      }}
    >
      {categories.map((category) => (
        <button
          className='category-btn'
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory ? '#FC1503' : 'black',
            color: category.name === selectedCategory ? 'white' : 'white',
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? 'white' : 'red',
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? '1' : '0.8',
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  )
}

export default SideBar
