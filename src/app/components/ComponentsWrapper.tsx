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
  const [error, setError] = useState<string>('')

  const toggleDisabled = () => {
    setDisabled(!disabled)
  }

  const toggleError = () => {
    setError(error ? '' : 'Error detected')
  }

  return (
    <Box sx={wrapperBoxStyle}>
      <CustomTextField disabled={disabled} helperText='Comments' label='Text field' error={error} />
      <Button variant='outlined' size='medium' onClick={toggleDisabled}>
        {disabled ? 'enable' : 'disable'}
      </Button>
      <Button variant='outlined' size='medium' color='error' onClick={toggleError}>
        {`${error ? 're' : ''}set error`}
      </Button>
    </Box>
  )
}
