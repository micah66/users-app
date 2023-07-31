import { RequestHandler, Response, Request } from 'express'
import { User, UserWithId, Users } from './users.model'
import { InsertOneResult } from 'mongodb'

export const getAll: RequestHandler = async (req, res: Response<User[]>) => {
  const result = await Users.find()
  res.json(await result.toArray())
}

export const createOne: RequestHandler = async (
  req: Request<{}, UserWithId, User>,
  res: Response<InsertOneResult<User>>,
) => {
  try {
    const validRequest = await User.parse(req.body)
    const result = await Users.insertOne(validRequest)
    res.json(result)
  } catch (e) {
    console.error(e)
  }
}
