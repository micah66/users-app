import { Router } from 'express'
import * as UsersHandlers from './users.handlers'
import { authenticate } from '../middlewares/authenticate'
import { authorize } from '../middlewares/authorize'

const router = Router()

router.use(authenticate)

router.get('/', UsersHandlers.getAll)
router.get('/:id', UsersHandlers.getById)
router.post('/', UsersHandlers.createOne)
router.put('/:id', authorize, UsersHandlers.updateOne)
router.delete('/:id', authorize, UsersHandlers.deleteOne)

export default router
