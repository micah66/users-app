import express, { Express, Request, Response } from 'express'

const app: Express = express()
const port: number = 5000

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Working')
})

app.listen(port, () => console.log(`listening on port ${port}...`))
