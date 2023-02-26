import { TextField, InputAdornment } from '@mui/material'
import { useState } from 'react'

interface ICustomTextField {
  label?: string
  disabled?: boolean
  helperText?: string
  error?: string
  onChange: () => void
  inputIcon: JSX.Element
}

export function CustomTextField({
  label,
  disabled,
  helperText,
  error,
  onChange,
  inputIcon,
}: ICustomTextField): JSX.Element {
  const [shrink, setShrink] = useState(false)

  return (
    <TextField
      disabled={disabled}
      error={!!error}
      helperText={error ? error : helperText}
      label={label}
      onBlur={(e) => {
        !e.target.value && setShrink(false)
      }}
      onChange={onChange}
      onFocus={() => setShrink(true)}
      InputProps={{
        startAdornment: <InputAdornment position='start'>{inputIcon}</InputAdornment>,
      }}
      InputLabelProps={{
        shrink: shrink,
      }}
    />
  )
}
