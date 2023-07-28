import { Typography } from '@mui/material'

import UserList from '../components/UserList/UserList'

export default function UsersPage() {
  return (
    <>
      <Typography variant="h3">Users</Typography>
      <UserList />
    </>
  )
}
