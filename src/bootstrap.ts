import { Root } from 'react-dom/client'
import { app } from './app/components/App'

import { createRouter, RoutingStrategy } from './routing/routingFactory'
import { createLocalRoot } from './utils'

export const KEEP_ALIVE_INTERVAL = 'keepAliveInterval'
const APP_ID = 'root'

interface IMountingOptions {
  root?: Root
  initialPathname?: string
  routingStrategy?: RoutingStrategy
}

export const mount = ({ root, initialPathname, routingStrategy }: IMountingOptions) => {
  if (window[KEEP_ALIVE_INTERVAL]) {
    clearInterval(Number(window[KEEP_ALIVE_INTERVAL]))
  }

  const resolvedRoot = root || createLocalRoot(APP_ID)

  const router = createRouter({ strategy: routingStrategy, initialPathname })

  resolvedRoot.render(app(router))
}
