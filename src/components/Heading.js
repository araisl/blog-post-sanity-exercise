import React from 'react'
import { Typography } from '@mui/material'

const Heading = ({ text }) => {
  return (
    <Typography variant="h1" component="h1" marginTop={5} marginBottom={3}>
      { text }
    </Typography>
  )
}

export default Heading
