import { useState } from 'react'
import { Dialog, Typography } from '@mui/material'

import UserList from '../components/UserList/UserList'
import EditUserForm from '../components/User/EditUserForm'
import { TUser } from '../components/User/User'

export default function UsersPage() {
  const [user, setUser] = useState<TUser | null>(null)

  const handleCloseDialog = () => setUser(null)

  return (
    <>
      <Typography variant="h3">Users</Typography>
      <UserList onEdit={(user) => setUser(user)} />
      <Dialog
        open={!!user}
        onClose={handleCloseDialog}
        sx={{ '.MuiPaper-root': { width: '75%' } }}
      >
        <EditUserForm
          user={user!}
          onSave={handleCloseDialog}
          onCancel={handleCloseDialog}
        />
      </Dialog>
    </>
  )
}
