import { Typography, List } from '@mui/material'
import './App.css'
import User, { TUser } from './components/User/User'

function App() {
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

export default App
