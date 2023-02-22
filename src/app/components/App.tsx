import 'typeface-roboto'
import '../../styles/index.css'

import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import type { Router as RemixRouter } from '@remix-run/router'

import { Suspense, StrictMode } from 'react'
import store from '../../state/store'
import { ThemeProvider } from '@mui/material'
import { theme } from '../../styles/theme'

interface IAppProps {
  router: RemixRouter
}

function App({ router }: IAppProps) {
  return (
    <Provider store={store}>
      <Suspense fallback={<h1>preparing...</h1>}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Suspense>
    </Provider>
  )
}

export default App

export const app = (router: RemixRouter) => (
  <StrictMode>
    <App router={router} />
  </StrictMode>
)
