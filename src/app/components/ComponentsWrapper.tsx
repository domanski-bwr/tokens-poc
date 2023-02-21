import { Button, TextField, Box, SxProps, InputAdornment } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import React from 'react'

const wrapperBoxStyle: SxProps = {
  display: 'flex',
  alignItems: 'baseline',
  height: '100vh',
  justifyContent: 'center',
  padding: '25% 0px',
  gap: '16px',
}

export function ComponentsWrapper() {
  return (
    <Box sx={wrapperBoxStyle}>
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
      <Button variant='contained' size='medium'>
        Button
      </Button>
    </Box>
  )
}
