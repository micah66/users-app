import { Typography } from '@mui/material'
import { Link } from '@tanstack/router'

import LoginForm from '../components/LoginForm/LoginForm'
export default function LoginPage() {
  return (
    <>
      <Typography variant="h3">Login</Typography>
      <LoginForm />
      <Typography paragraph>
        Not a user? <Link style={{ textDecoration: 'none' }}>Sign up</Link>
      </Typography>
    </>
  )
}
