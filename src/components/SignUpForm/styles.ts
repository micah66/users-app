import { styled } from '@mui/material/styles'

export const StyledForm = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  paddingBlock: '16px',
  alignItems: 'center',
  justifyContent: 'center',
  width: '60%',
  margin: '0 auto',
  maxWidth: '300px',
}))
