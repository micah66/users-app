import { styled } from '@mui/material/styles'
import { ListItem } from '@mui/material'

export const StyledListItem = styled(ListItem)(() => ({
  border: 'solid 1px black',
  borderRadius: '4px',
  marginBlock: '1px',

  '.MuiListItemButton-root': {
    flexGrow: 0,
  },
}))
