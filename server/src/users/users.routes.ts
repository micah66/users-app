import { Router, Response } from 'express'
import { User } from './users.model'

const router = Router()

router.get('/', (req, res: Response<User[]>) => {
  res.json([])
})

export default router
