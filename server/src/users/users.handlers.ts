import { RequestHandler, Response } from 'express'
import { User, Users } from './users.model'

export const getAll: RequestHandler = async (req, res: Response<User[]>) => {
  const result = await Users.find()
  res.json(await result.toArray())
}
