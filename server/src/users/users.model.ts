import { WithId } from 'mongodb'
import * as z from 'zod'

import { db } from '../db'

export const User = z.object({
  username: z.string(),
  password: z.string(),
  role: z.enum(['admin', 'user']),
})

export type User = z.infer<typeof User>
export type UserWithId = WithId<User>
export const Users = db.collection<User>('users')
