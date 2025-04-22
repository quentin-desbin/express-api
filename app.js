import express from 'express'
import usersRouter from './routers/users.router.js'
import errorMiddleware from './middlewares/error.middleware.js'
import demoMiddleware from './middlewares/demo.middleware.js'
import OpenApiValidator from 'express-openapi-validator'

const app = express()
app.use(express.json())

// Use a global customized standard middleware
app.use(demoMiddleware)

app.use(
    OpenApiValidator.middleware({
        apiSpec: './openapi-main.yaml',
        validateRequests: true,
        validateResponses: false
    })
)

app.use('/v1/users', usersRouter)

// Use a global customized error middleware
app.use(errorMiddleware)

export default app
