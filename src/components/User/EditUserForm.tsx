import { TextField, Button, MenuItem, Box } from '@mui/material'
import { useForm } from 'react-hook-form'

import { StyledForm } from '../SignUpForm/styles'
import { TUser } from './User'
import { useLocalStorage } from '../../utils/hooks/useStorage'

type FormValues = TUser

export default function EditUserForm({
  user,
  onSave,
  onCancel,
}: {
  user: TUser
  onSave: () => void
  onCancel: () => void
}) {
  const [, setUsers] = useLocalStorage<TUser[]>({
    key: 'users',
    initValue: [],
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: user,
  })

  const onSubmit = handleSubmit(async (data: TUser) => {
    await setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === data.id ? data : user)),
    )

    onSave()
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
        defaultValue={user?.role}
        sx={{ textAlign: 'start' }}
      >
        <MenuItem value="admin">Admin</MenuItem>
        <MenuItem value="user">User</MenuItem>
      </TextField>
      <Box sx={{ display: 'flex', gap: '24px' }}>
        <Button
          onClick={onCancel}
          variant="contained"
          size="large"
          color="inherit"
          sx={{ textTransform: 'unset' }}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ textTransform: 'unset' }}
        >
          Save
        </Button>
      </Box>
    </StyledForm>
  )
}
