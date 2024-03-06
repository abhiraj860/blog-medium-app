import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  }
}>()

app.post('/api/v1/user/signup', async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try {
    await prisma.user.create({
      data:{
        username: body.username,
        password: body.password,
        name: body.name
      }
    })
    return c.text('Signed up!')
  } catch(error) {
    c.status(411);
    return c.text('Invalid');
  }
})

app.post('/api/v1/user/signin', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.put('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog/:id', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog', (c) => {
  return c.text('Hello Hono2!')
})


export default app
// postgresql://abhiaditya860:GTx9J1XhZQLi@ep-twilight-violet-55759560.us-east-2.aws.neon.tech/neondb?sslmode=require
// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiZGNjZGVmOGMtZjk0NC00OGI3LWFmYmYtODUyNjg4ZDJjYmNkIiwidGVuYW50X2lkIjoiMGU4NjBlMTE1MWRjZWM5OGMyY2M0YzI2NGE3ZDRhODU3ZThmNTlkYzFiMGE0NDk5NmY1YTZiMWEyZGNiZDYyNCIsImludGVybmFsX3NlY3JldCI6ImQyNTUzNjQxLTUxODEtNGI0My04NGVjLTQ3ODE4YjZiZGU0OSJ9.Y5jsXqKk0XdhzGt5du8kH_OtPXLVOVJJ0P4h1g5ZVWE"