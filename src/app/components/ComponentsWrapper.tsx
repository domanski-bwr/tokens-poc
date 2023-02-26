import { Button, Box, SxProps } from '@mui/material'
import { useState } from 'react'
import { SearchIcon } from '../icons/SearchIcon'
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

  const handleChange = () => {
    if (error) {
      setError('')
    }
  }

  return (
    <Box sx={wrapperBoxStyle}>
      <CustomTextField
        disabled={disabled}
        error={error}
        helperText='Comments'
        inputIcon={<SearchIcon />}
        label='Text field'
        onChange={handleChange}
      />
      <Button variant='outlined' size='medium' onClick={toggleDisabled}>
        {disabled ? 'enable' : 'disable'}
      </Button>
      <Button sx={{ width: '125px' }} variant='outlined' size='medium' color='error' onClick={toggleError}>
        {`${error ? 're' : ''}set error`}
      </Button>
    </Box>
  )
}
