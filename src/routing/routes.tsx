import { Navigate, Outlet } from 'react-router-dom'
import { ComponentsWrapper } from '../app/components/ComponentsWrapper'

import NavigationManager from './NavigationManager'

export const routes = [
  {
    path: '/',
    element: <ComponentsWrapper />,
  },
  {
    path: '/content',
    element: (
      <NavigationManager>
        <div> CONTENT</div>
      </NavigationManager>
    ),
  },
]
