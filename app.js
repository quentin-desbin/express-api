import express from 'express'
import usersRouter from './routers/users.router.js'
import errorMiddleware from './middlewares/error.middleware.js'
import demoMiddleware from './middlewares/demo.middleware.js'

const app = express()
app.use(express.json())

// Use a global customized standard middleware
app.use(demoMiddleware)

app.use('/users', usersRouter)

// Use a global customized error middleware
app.use(errorMiddleware)

export default app
