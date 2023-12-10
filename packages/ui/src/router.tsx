import { RootRoute, Route, Router } from '@tanstack/react-router'

import RootLayout from './app/layout'
import IndexPage from './app/page'
import { pageOptions as indexPageOptions, layoutOptions as rootLayoutOptions } from './app/route'

export const rootLayoutRoute = new RootRoute({
  ...rootLayoutOptions,
  component: RootLayout,
})

export const indexPageRoute = new Route({
  ...indexPageOptions,
  getParentRoute: () => rootLayoutRoute,
  path: '/',
  component: IndexPage,
})

export const router = new Router({
  routeTree: rootLayoutRoute.addChildren([
    indexPageRoute,
  ]),
  // notFoundRoute
})
