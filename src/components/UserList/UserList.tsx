import { List } from '@mui/material'
import User, { TUser } from '../User/User'

export default function UserList() {
  const users: TUser[] = [
    {
      id: '1',
      firstName: 'User',
      lastName: 'One',
      username: 'user1',
      email: 'userone@mail.com',
      role: 'user',
    },
    {
      id: '2',
      firstName: 'User',
      lastName: 'Two',
      username: 'user2',
      email: 'usertwo@gmail.com',
      role: 'admin',
    },
  ]
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
