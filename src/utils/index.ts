import { createRoot } from 'react-dom/client'

export function createLocalRoot(appId: string) {
  const localRoot = document.getElementById(appId)
  return createRoot(localRoot!)
}
