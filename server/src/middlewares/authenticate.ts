import { RequestHandler } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const { JWT_SECRET } = process.env

export const authenticate: RequestHandler = (req, res, next) => {
  const { token } = req.cookies
  try {
    jwt.verify(token, JWT_SECRET!)
  } catch (e) {
    return res.sendStatus(401)
  }

  return next()
}
