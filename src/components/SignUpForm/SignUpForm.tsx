import { TextField, Button, MenuItem } from '@mui/material'
import { useForm } from 'react-hook-form'

import { StyledForm } from './styles'
import { TUser } from '../User/User'
import { useLocalStorage } from '../../utils/hooks/useStorage'
import router from '../../routes'

type FormValues = TUser

export default function SignUpForm() {
  const [users, setUsers] = useLocalStorage<TUser[]>({
    key: 'users',
    initValue: [],
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      id: Date.now().toLocaleString(),
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      role: 'user',
    },
  })

  const onSubmit = handleSubmit(async (data: TUser) => {
    const existingUser = users.find(
      (user) => user.username === data.username || user.email === data.email,
    )
    if (existingUser) {
      //TODO: indicator error for existing user
      return
    }
    await setUsers((prevUsers) => [...prevUsers, data])

    router.navigate({ to: '/' })
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
        margin="normal"
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
