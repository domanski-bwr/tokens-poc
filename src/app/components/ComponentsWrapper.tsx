import { Button, Box, SxProps } from '@mui/material'
import { useState } from 'react'
import { CustomTextField } from './TextField/CustomTextField'

const wrapperBoxStyle: SxProps = {
  display: 'flex',
  alignItems: 'baseline',
  height: '100vh',
  justifyContent: 'center',
  padding: '25% 0px',
  gap: '16px',
}

export function ComponentsWrapper() {
  const [disabled, setDisabled] = useState<boolean>(false)

  const toggleDisabled = () => {
    setDisabled(!disabled)
  }

  return (
    <Box sx={wrapperBoxStyle}>
      <CustomTextField disabled={disabled} helperText='Comments' label='Text field' />
      <Button variant='contained' size='medium' onClick={toggleDisabled}>
        {disabled ? 'enable' : 'disable'}
      </Button>
    </Box>
  )
}
