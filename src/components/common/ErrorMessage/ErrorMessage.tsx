import { Typography } from '@mui/material'

export default function ErrorMessage({ message }: { message: string }) {
  return (
    <Typography paragraph color="red">
      {message}
    </Typography>
  )
}
