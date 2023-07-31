import { Router } from 'express'
import * as UsersHandlers from './users.handlers'

const router = Router()

router.get('/', UsersHandlers.getAll)
router.post('/', UsersHandlers.createOne)

export default router
