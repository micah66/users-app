import { Router } from 'express'
import * as LoginHandlers from './login.handlers'

const router = Router()

router.post('/sign-up', LoginHandlers.signUp)
router.post('/login', LoginHandlers.login)

export default router
