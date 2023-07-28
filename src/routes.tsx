import { Outlet, Router, Route, RootRoute } from '@tanstack/router'

import UsersPage from './pages/UsersPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

const rootRoute = new RootRoute({
  component: () => <Outlet />,
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: UsersPage,
})

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginPage,
})

const signUpRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/sign-up',
  component: SignUpPage,
})

const routeTree = rootRoute.addChildren([indexRoute, loginRoute, signUpRoute])

const router = new Router({ routeTree })

declare module '@tanstack/router' {
  interface Register {
    router: typeof router
  }
}

export default router
