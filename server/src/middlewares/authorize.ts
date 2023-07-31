import { RequestHandler } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import dotenv from 'dotenv'
import { ObjectId } from 'mongodb'
import { Users } from '../users/users.model'

dotenv.config()

export const authorize: RequestHandler = async (req, res, next) => {
  const { token } = req.cookies
  try {
    const { id } = jwt.decode(token) as JwtPayload
    const user = await Users.findOne({ _id: new ObjectId(id) })
    if (!(user && user.role === 'admin')) {
      res.sendStatus(401)
    }
  } catch (e) {
    return res.sendStatus(401)
  }

  return next()
}
