import { TextField, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { StyledForm } from './styles'

type FormValues = {
  username: string
  email: string
}

export default function LoginForm() {
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = handleSubmit((data) => console.log('data', data))

  return (
    <StyledForm onSubmit={onSubmit}>
      <TextField
        type="text"
        placeholder="Enter username"
        {...register('username')}
      />
      <TextField type="text" placeholder="Enter email" {...register('email')} />
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
