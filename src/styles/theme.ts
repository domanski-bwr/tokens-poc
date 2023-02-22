import { createTheme, InputBaseProps } from '@mui/material'
import './_variables.css'

// TODO consider fallback and error handling
const getCssVarByName = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim()

const isDisabled = (ownerState: InputBaseProps): boolean => {
  return !!ownerState?.disabled
}

export const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          '& .MuiInputLabel-root:not(.MuiInputLabel-shrink)': {
            transform: 'translate(41px, 17px)',
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
          fontSize: getCssVarByName('--textfield-font-size-input'),
          letterSpacing: getCssVarByName('--textfield-letter-spacing-input'),
          lineHeight: getCssVarByName('--textfield-line-height-input'),
          textTransform: getCssVarByName('--textfield-capitalize') as 'capitalize',
          fontFamily: getCssVarByName('--textfield-font-family-roboto'),
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          borderRadius: getCssVarByName('--textfield-border-radius-default'),
          ':hover': !isDisabled(ownerState)
            ? {
                border: `2px solid ${getCssVarByName('--textfield-main-black')}`,
              }
            : undefined,
        }),
        input: ({ ownerState, theme }) => ({
          padding: ' 0px',
        }),
        notchedOutline: ({ ownerState, theme }) => ({
          // border: `none`,
          // border: `1px solid ${getCssVarByName(
          //   !isDisabled(ownerState) ? '--textfield-main-black' : '--textfield-main-disabled',
          // )}`,
        }),
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          fontSize: getCssVarByName('--textfield-font-size-helper-text'),
          letterSpacing: getCssVarByName('--textfield-letter-spacing-helper-text'),
          lineHeight: getCssVarByName('--textfield-line-height-helper-text'),
          color: getCssVarByName('--textfield-main-grey'),
          padding: '2px 16px',
          margin: 'unset',
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          return {
            color: !ownerState.shrink ? 'transparent' : 'inherit',
          }
        },
      },
    },
  },
})
