import { Typography, List } from '@mui/material'
import User, { TUser } from '../User/User'

export default function UserList() {
  const users: TUser[] = [
    {
      id: '1',
      username: 'user1',
      role: 'user',
    },
    {
      id: '2',
      username: 'user2',
      role: 'admin',
    },
  ]
  return (
    <>
      <Typography variant="h3">Users</Typography>
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
    </>
  )
}
