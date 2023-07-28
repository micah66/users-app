import { List } from '@mui/material'
import User, { TUser } from '../User/User'
import { useLocalStorage } from '../../utils/hooks/useStorage'

export default function UserList() {
  const [users] = useLocalStorage<TUser[]>({ key: 'users' })
  return (
    <List>
      {users.map((user) => (
        <User
          key={user.id}
          username={user.username}
          handleDelete={() => {}}
          handleEdit={() => {}}
        />
      ))}
    </List>
  )
}
