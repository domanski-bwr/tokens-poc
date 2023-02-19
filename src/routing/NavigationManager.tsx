import { ReactElement, useEffect } from 'react'
import { createPath, useLocation, useNavigate } from 'react-router-dom'

interface NavigationManagerProps {
  children: ReactElement
}

const SHELL_NAVIGATED_EVENT = '[shell] navigated'
const REMOTE_NAVIGATED_EVENT = '[remoteApp] navigated'

export default function NavigationManager({ children }: NavigationManagerProps) {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const { pathname, search } = location
    const appPath = createPath({ pathname, search })

    const shellNavigationHandler = (event: Event) => {
      const shellPath = (event as CustomEvent<string>).detail

      if (shellPath === appPath) {
        return
      }

      if (shellPath.includes('accountId')) {
        if (shellPath.includes('/admin/accounts')) {
          const newPath = createPath({ pathname: '/admin/farms', search: shellPath.split('?')[1] })
          navigate(newPath)
          return
        } else if (shellPath.includes('/admin/farms') && shellPath.includes('farmId')) {
          const newPath = createPath({ pathname: '/admin/farm', search: shellPath.split('?')[1] })
          navigate(newPath)
          return
        }
      } else {
        navigate('/admin/accounts')
        return
      }

      navigate(shellPath)
    }

    window.addEventListener(SHELL_NAVIGATED_EVENT, shellNavigationHandler)
    window.dispatchEvent(new CustomEvent(REMOTE_NAVIGATED_EVENT, { detail: appPath }))

    return () => {
      window.removeEventListener(SHELL_NAVIGATED_EVENT, shellNavigationHandler)
    }
  }, [location])

  return children
}
