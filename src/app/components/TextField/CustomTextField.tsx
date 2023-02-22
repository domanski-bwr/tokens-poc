import { TextField, InputAdornment } from '@mui/material'
import { useState } from 'react'
import { SearchIcon } from '../../icons/SearchIcon'

export function CustomTextField({ label, disabled, helperText }) {
  const [shrink, setShrink] = useState(false)

  return (
    <TextField
      disabled={disabled}
      helperText={helperText}
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
