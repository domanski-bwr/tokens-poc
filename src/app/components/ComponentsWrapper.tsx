import { Button, TextField, Box, SxProps } from '@mui/material'
import React from 'react'

const wrapperBoxStyle: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
  justifyContent: 'center',
}

export function ComponentsWrapper() {
  return (
    <Box sx={wrapperBoxStyle}>
      <Button>Button</Button>
      <TextField />
    </Box>
  )
}
