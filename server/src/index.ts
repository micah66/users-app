import express, { Express, Request, Response, Router } from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import users from './users/users.routes'
import login from './login/login.routes'

const app: Express = express()
const port: number = 5000

const router = Router()

router.use('/users', users)
router.use('/', login)

app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    origin: ['http:localhost:5173'],
  }),
)

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Working')
})

app.use('/api/v1/', router)

app.listen(port, () => console.log(`listening on port ${port}...`))
