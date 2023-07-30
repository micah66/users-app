import { Outlet, Router, Route, RootRoute, redirect } from '@tanstack/router'

import UsersPage from './pages/UsersPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import Header from './components/Header/Header'

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
  component: () => (
    <>
      <Header />
      <Outlet />
    </>
  ),
  beforeLoad: () => {
    if (!isAuthenticated()) {
      throw redirect({
        to: loginRoute.to,
      })
    }
  },
})

const usersRoute = new Route({
  getParentRoute: () => indexRoute,
  path: '/users',
  component: UsersPage,
})

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginPage,
  beforeLoad: () => {
    if (isAuthenticated()) {
      throw redirect({
        to: usersRoute.to,
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
        to: usersRoute.to,
      })
    }
  },
})

const routeTree = rootRoute.addChildren([
  indexRoute.addChildren([usersRoute]),
  loginRoute,
  signUpRoute,
])

const router = new Router({ routeTree })

declare module '@tanstack/router' {
  interface Register {
    router: typeof router
  }
}

export default router
