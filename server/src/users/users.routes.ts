import { Router } from 'express'
import * as UsersHandlers from './users.handlers'

const router = Router()

router.get('/', UsersHandlers.getAll)
router.get('/:id', UsersHandlers.getById)
router.post('/', UsersHandlers.createOne)
router.put('/:id', UsersHandlers.updateOne)

export default router
