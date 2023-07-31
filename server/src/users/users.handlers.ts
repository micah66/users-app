import { RequestHandler, Response, Request } from 'express'
import { User, UserWithId, Users } from './users.model'
import { InsertOneResult, ObjectId } from 'mongodb'

export const getAll: RequestHandler = async (req, res: Response<User[]>) => {
  const result = await Users.find()
  res.json(await result.toArray())
}

export const getById = async (
  req: Request<{ id: string }, UserWithId>,
  res: Response<UserWithId>,
) => {
  const result = await Users.findOne({ _id: new ObjectId(req.params.id) })
  if (!result) {
    throw new Error(`User with id ${req.params.id} does not exist`)
  }
  res.json(result)
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
