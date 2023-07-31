import { Response, Request } from 'express'
import { User, Users } from '../users/users.model'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const { JWT_SECRET, NODE_ENV } = process.env

export const signUp = async (req: Request<{}, {}, User>, res: Response) => {
  try {
    const validRequest = User.parse(req.body)
    const result = await Users.insertOne(validRequest)

    const token = jwt.sign(
      {
        id: result.insertedId,
      },
      JWT_SECRET!,
    )

    res.cookie('token', token, {
      secure: NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24,
    })

    res.sendStatus(201)
  } catch (e) {
    console.error(e)
  }
}

export const login = async (
  req: Request<{}, {}, Pick<User, 'username' | 'password'>>,
  res: Response,
) => {
  const user = await Users.findOne({ username: req.body.username })
  if (!user || user.password !== req.body.password) {
    res.status(403)
    throw new Error('Invalid credentials')
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    JWT_SECRET!,
  )

  res.cookie('token', token, {
    secure: NODE_ENV === 'production',
    maxAge: 1000 * 60 * 60 * 24,
  })

  res.sendStatus(200)
}
