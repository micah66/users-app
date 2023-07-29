import { useState } from 'react'
import { Icon, ListItemButton, ListItemText } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

import { StyledListItem } from './styles'

const currentUserRole = 'admin'

export type TUser = {
  id: string
  firstName: string
  lastName: string
  username: string
  email: string
  role: 'admin' | 'user'
}

type UserDetails = Pick<TUser, 'username' | 'role'>
type UserActions = {
  handleDelete: () => void
  handleEdit: () => void
}

export default function User({
  username,
  role,
  handleDelete,
  handleEdit,
}: UserDetails & UserActions) {
  const [hovering, setHovering] = useState<boolean>(false)

  return (
    <StyledListItem
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <ListItemText primary={username} />
      <ListItemText primary={role} />
      {currentUserRole === 'admin' && hovering && (
        <>
          <ListItemButton
            onClick={handleEdit}
            sx={{ padding: 0, paddingLeft: '16px' }}
          >
            <Icon>
              <EditIcon />
            </Icon>
          </ListItemButton>
          <ListItemButton
            onClick={handleDelete}
            sx={{ padding: 0, paddingLeft: '16px' }}
          >
            <Icon>
              <DeleteIcon />
            </Icon>
          </ListItemButton>
        </>
      )}
    </StyledListItem>
  )
}
