import { Icon, ListItemButton, ListItemText } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

import { StyledListItem } from './styles'

const currentUserRole = 'admin'

export type TUser = {
  id: string
  username: string
  role: 'admin' | 'user'
}

type UserDetails = Pick<TUser, 'username'>
type UserActions = {
  handleDelete: () => void
  handleEdit: () => void
}

export default function User({
  username,
  handleDelete,
  handleEdit,
}: UserDetails & UserActions) {
  return (
    <StyledListItem>
      <ListItemText primary={username} />
      {currentUserRole === 'admin' && (
        <>
          <ListItemButton onClick={handleEdit}>
            <Icon>
              <EditIcon />
            </Icon>
          </ListItemButton>
          <ListItemButton onClick={handleDelete}>
            <Icon>
              <DeleteIcon />
            </Icon>
          </ListItemButton>
        </>
      )}
    </StyledListItem>
  )
}
