import { List } from '@mui/material'
import User, { TUser } from '../User/User'
import { useLocalStorage } from '../../utils/hooks/useStorage'

export default function UserList({
  onEdit,
}: {
  onEdit: (user: TUser) => void
}) {
  const [users, setUsers] = useLocalStorage<TUser[]>({ key: 'users' })

  return (
    <List>
      {users.map((user) => (
        <User
          key={user.id}
          username={user.username}
          role={user.role}
          handleDelete={() => {
            setUsers((prevUsers) =>
              prevUsers.filter((currentUser) => currentUser.id !== user.id),
            )
          }}
          handleEdit={() => onEdit(user)}
        />
      ))}
    </List>
  )
}
