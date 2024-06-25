import { PrismaClient } from '@prisma/client'
import express from 'express'
const app: express.Express = express()
const port = 3000

const prisma = new PrismaClient()

// JSONを見やすく整形する
app.set('json spaces', 4)

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.get('/users', async (_req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

app.get('/create-user', async (_req, res) => {
  const newUser = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'test1@example.com',
    }
  })
  res.json(newUser)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})