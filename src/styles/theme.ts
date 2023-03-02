import { createTheme, InputBaseProps, TextFieldProps } from '@mui/material'
import './_variables.css'

import figmaTheme from '../../output/styles/theme'

// TODO consider fallback and error handling
const getCssVarByName = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim()

const isDisabled = (ownerState: InputBaseProps): boolean => {
  return !!ownerState?.disabled
}

export const theme = createTheme({
  palette: {
    error: {
      main: getCssVarByName('--textfield-main-red'),
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          '& label.Mui-focused': {
            color: getCssVarByName(
              !isDisabled(ownerState as InputBaseProps) ? '--textfield-main-black' : '--textfield-main-grey',
            ),
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              border: `2px solid ${getCssVarByName(
                !isDisabled(ownerState as InputBaseProps) ? '--textfield-main-black' : '--textfield-main-disabled',
              )}`,
            },
          },
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          return {
            height: getCssVarByName('--textfield-height'),
            padding: getCssVarByName('0px 16px'),
            width: getCssVarByName('--textfield-width'),
            color: getCssVarByName(!isDisabled(ownerState) ? '--textfield-main-black' : '--textfield-main-grey'),
            '& .MuiInputAdornment-root': {
              color: getCssVarByName(!isDisabled(ownerState) ? '--textfield-main-black' : '--textfield-main-disabled'),
            },
          }
        },
        input: ({ ownerState, theme }) => ({
          fontFamily: getCssVarByName('--textfield-font-family-roboto'),
          fontSize: getCssVarByName('--textfield-font-size-input'),
          letterSpacing: getCssVarByName('--textfield-letter-spacing-input'),
          lineHeight: getCssVarByName('--textfield-line-height-input'),
          textTransform: getCssVarByName('--textfield-capitalize') as 'capitalize',
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: ({ ownerState, theme }) => ({
          padding: ' 0px',
        }),
        notchedOutline: ({ ownerState, theme }) => ({
          border: `1px solid ${getCssVarByName(
            !isDisabled(ownerState) ? '--textfield-main-black' : '--textfield-main-disabled',
          )}`,
        }),
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          color: figmaTheme.colors.mainGrey,
          fontSize: getCssVarByName('--textfield-font-size-helper-text'),
          letterSpacing: getCssVarByName('--textfield-letter-spacing-helper-text'),
          lineHeight: getCssVarByName('--textfield-line-height-helper-text'),
          margin: 'unset',
          padding: '2px 16px',
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ ownerState, theme }: any) => {
          return {
            color: getCssVarByName(
              !isDisabled(ownerState as InputBaseProps) ? '--textfield-main-black' : '--textfield-main-grey',
            ),
            fontFamily: getCssVarByName('--textfield-font-family-roboto'),
            fontSize: getCssVarByName('--textfield-font-size-input'),
            letterSpacing: getCssVarByName('--textfield-letter-spacing-helper-text'),
            lineHeight: getCssVarByName('--textfield-line-height-input'),
            ':not(.MuiInputLabel-shrink)': {
              transform: 'translate(48px, 16px)',
              letterSpacing: getCssVarByName('--textfield-letter-spacing-input'),
            },
          }
        },
      },
    },
  },
})
