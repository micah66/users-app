import { Outlet, Router, Route, RootRoute } from '@tanstack/router'
import UserList from './components/UserList/UserList'

const rootRoute = new RootRoute({
  component: () => <Outlet />,
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: UserList,
})

const routeTree = rootRoute.addChildren([indexRoute])

const router = new Router({ routeTree })

declare module '@tanstack/router' {
  interface Register {
    router: typeof router
  }
}

export default router
