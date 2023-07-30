import { useState } from 'react'
import { Icon, ListItemButton, ListItemText } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

import { StyledListItem } from './styles'
import { useLocalStorage } from '../../utils/hooks/useStorage'

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
  const [activeUser] = useLocalStorage<TUser>({ key: 'activeUser' })

  const isActiveUser = () => activeUser.username === username
  const checkPermissions = () => isActiveUser() || activeUser.role === 'admin'

  return (
    <StyledListItem
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <ListItemText primary={username} />
      <ListItemText primary={role} />
      {checkPermissions() && hovering && (
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
            disabled={isActiveUser()}
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
