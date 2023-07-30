import {
  ButtonProps as MuiButtonProps,
  Button as MuiButton,
} from '@mui/material'

type ButtonProps = {
  text?: string
}

export default function Button({
  text,
  ...muiButtonProps
}: ButtonProps & MuiButtonProps) {
  return (
    <MuiButton
      variant="contained"
      {...muiButtonProps}
      sx={{ ...muiButtonProps.sx, textTransform: 'unset' }}
    >
      {text}
    </MuiButton>
  )
}
