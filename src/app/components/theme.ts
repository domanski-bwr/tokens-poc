import { createTheme } from '@mui/material'
import '../../tokens/config/build/css/_variables.css'

// TODO consider fallback and error handling
const getCssVarByName = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim()

export const theme = createTheme({
  palette: {
    // primary: {
    //   main: getCssVarByName('--sd-button-color-blue'),
    // },
  },
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     root: ({ ownerState }) => ({
    //       width: '193px',
    //       margin: '16px 0px',
    //       borderRadius: getCssVarByName('--sd-button-default', ''),
    //       '&:hover': {
    //         backgroundColor: getCssVarByName('--sd-button-color-hover'),
    //       },
    //     }),
    //   },
    // },
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          // width: getCssVarByName('--sd-textfield-width'),
          // height: getCssVarByName('--sd-textfield-height'),
          // padding: getCssVarByName('--sd-textfield-padding'),
          // border: 'solid 1px red',
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          height: getCssVarByName('--sd-textfield-height'),
          padding: getCssVarByName('--sd-textfield-padding'),
          width: getCssVarByName('--sd-textfield-width'),
          color: getCssVarByName('--sd-textfield-main-black'),
          '& .MuiInputAdornment-root': {
            color: 'inherit',
          },
        }),
        input: ({ ownerState, theme }) => ({
          fontSize: getCssVarByName('--sd-textfield-font-size-input'),
          letterSpacing: getCssVarByName('--sd-textfield-default-letter-spacing'),
          lineHeight: getCssVarByName('--sd-textfield-default-line-height'),
          textTransform: getCssVarByName('--sd-textfield-capitalize') as 'capitalize',
          fontFamily: getCssVarByName('--sd-textfield-roboto'),
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: ({ ownerState, theme }) => ({
          padding: ' 0px',
        }),
        notchedOutline: ({ ownerState, theme }) => ({
          borderRadius: getCssVarByName('--sd-textfield-default-border-radius'),
          border: `1px solid ${getCssVarByName('--sd-textfield-main-black')}`,
        }),
      },
    },
  },
})
