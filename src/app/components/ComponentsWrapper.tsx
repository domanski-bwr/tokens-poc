import { Button, TextField, Box, SxProps, InputAdornment } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
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
      <Button variant='contained' size='medium'>
        Button
      </Button>
      <TextField
        helperText='Comments'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  )
}
