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
          border: 'solid 1px red',
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          width: getCssVarByName('--sd-textfield-width'),
          height: getCssVarByName('--sd-textfield-height'),
          padding: getCssVarByName('--sd-textfield-padding'),
        }),
      },
    },
  },
})
