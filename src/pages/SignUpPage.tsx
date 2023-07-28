import { Typography } from '@mui/material'
import { Link } from '@tanstack/router'

import SignUpForm from '../components/SignUpForm/SignUpForm'

export default function SignUpPage() {
  return (
    <>
      <Typography variant="h3">Sign Up</Typography>
      <SignUpForm />
      <Typography paragraph>
        Already a user?{' '}
        <Link to="/login" style={{ textDecoration: 'none' }}>
          Log In
        </Link>
      </Typography>
    </>
  )
}
