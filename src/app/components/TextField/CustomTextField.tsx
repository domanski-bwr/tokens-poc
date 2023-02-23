import { TextField, InputAdornment } from '@mui/material'
import { useState } from 'react'
import { SearchIcon } from '../../icons/SearchIcon'

interface ICustomTextField {
  label?: string
  disabled?: boolean
  helperText?: string
  error?: string
}

export function CustomTextField({ label, disabled, helperText, error }: ICustomTextField): JSX.Element {
  const [shrink, setShrink] = useState(false)

  return (
    <TextField
      error={!!error}
      disabled={disabled}
      helperText={error ? error : helperText}
      onFocus={() => setShrink(true)}
      onBlur={(e) => {
        !e.target.value && setShrink(false)
      }}
      label={label}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      InputLabelProps={{
        shrink: shrink,
      }}
    />
  )
}
