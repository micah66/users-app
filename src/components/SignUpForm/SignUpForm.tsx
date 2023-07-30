import { useState } from 'react'
import { TextField, Button, MenuItem } from '@mui/material'
import { useForm } from 'react-hook-form'

import { StyledForm } from './styles'
import { TUser } from '../User/User'
import { useLocalStorage } from '../../utils/hooks/useStorage'
import router from '../../routes'
import ErrorMessage from '../common/ErrorMessage/ErrorMessage'

type FormValues = TUser

export default function SignUpForm() {
  const [users, setUsers] = useLocalStorage<TUser[]>({
    key: 'users',
    initValue: [],
  })

  const [, setActiveUser] = useLocalStorage<TUser>({ key: 'activeUser' })

  const [error, setError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      id: Date.now().toString(),
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      role: 'user',
    },
  })

  const onSubmit = handleSubmit((data: TUser) => {
    const existingUser = users.find(
      (user) => user.username === data.username || user.email === data.email,
    )
    if (existingUser) {
      setError('User already exists. Try another username/email')

      return
    }

    setUsers((prevUsers) => [...prevUsers, data])

    setActiveUser(data)
    router.navigate({ to: '/users' })
  })

  return (
    <StyledForm onSubmit={onSubmit}>
      <TextField
        fullWidth
        type="text"
        placeholder="First Name"
        {...register('firstName', { required: 'First Name is required' })}
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
      />
      <TextField
        fullWidth
        type="text"
        placeholder="Last Name"
        {...register('lastName', { required: 'Last Name is required' })}
        error={!!errors.lastName}
        helperText={errors.lastName?.message}
      />
      <TextField
        fullWidth
        type="text"
        placeholder="Username"
        {...register('username', { required: 'Username is required' })}
        error={!!errors.username}
        helperText={errors.username?.message}
      />
      <TextField
        fullWidth
        type="text"
        placeholder="Email"
        {...register('email', { required: 'Email is required' })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        fullWidth
        select
        {...register('role', { required: 'Role is required' })}
        error={!!errors.role}
        helperText={errors.role?.message}
        defaultValue=""
        SelectProps={{
          displayEmpty: true,
        }}
        sx={{ textAlign: 'start' }}
      >
        <MenuItem value="">Role</MenuItem>
        <MenuItem value="admin">Admin</MenuItem>
        <MenuItem value="user">User</MenuItem>
      </TextField>
      {error && <ErrorMessage message={error!} />}
      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{ textTransform: 'unset' }}
      >
        Sign Up
      </Button>
    </StyledForm>
  )
}
