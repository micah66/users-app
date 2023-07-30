import { useState } from 'react'
import { TextField, Button, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'

import { StyledForm } from './styles'
import { TUser } from '../User/User'
import { useLocalStorage } from '../../utils/hooks/useStorage'
import router from '../../routes'

type FormValues = Pick<TUser, 'username' | 'email'>

export default function LoginForm() {
  const [users] = useLocalStorage<TUser[]>({ key: 'users', initValue: [] })
  const [, setActiveUser] = useLocalStorage<TUser | null>({
    key: 'activeUser',
    initValue: null,
  })
  const [error, setError] = useState<string | null>(null)
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = handleSubmit(async ({ username, email }) => {
    const user = users.find((user) => user.username === username)

    if (!user || user.email !== email) {
      return setError('Invalid credentials')
    }

    await setActiveUser(user)
    router.navigate({ to: '/' })
  })

  return (
    <StyledForm onSubmit={onSubmit}>
      <TextField type="text" placeholder="Username" {...register('username')} />
      <TextField type="text" placeholder="Email" {...register('email')} />
      {error && (
        <Typography paragraph color="red">
          {error}
        </Typography>
      )}
      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{ textTransform: 'unset' }}
      >
        Log In
      </Button>
    </StyledForm>
  )
}
