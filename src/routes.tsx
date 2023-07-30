import { Outlet, Router, Route, RootRoute, redirect } from '@tanstack/router'

import UsersPage from './pages/UsersPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

const isAuthenticated = () => {
  const activeUser = window.localStorage.getItem('activeUser')

  return activeUser && activeUser !== 'null'
}
const rootRoute = new RootRoute({
  component: () => <Outlet />,
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: UsersPage,
  beforeLoad: () => {
    if (!isAuthenticated()) {
      throw redirect({
        to: loginRoute.to,
      })
    }
  },
})

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginPage,
  beforeLoad: () => {
    if (isAuthenticated()) {
      throw redirect({
        to: indexRoute.to,
      })
    }
  },
})

const signUpRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/sign-up',
  component: SignUpPage,
  beforeLoad: () => {
    if (isAuthenticated()) {
      throw redirect({
        to: indexRoute.to,
      })
    }
  },
})

const routeTree = rootRoute.addChildren([indexRoute, loginRoute, signUpRoute])

const router = new Router({ routeTree })

declare module '@tanstack/router' {
  interface Register {
    router: typeof router
  }
}

export default router
