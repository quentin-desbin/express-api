import express from 'express'
import { getAllUsers, createUser, loginUser } from '../controllers/users.controller.js'
import authMiddleware from '../middlewares/auth.middleware.js'

const router = express.Router()

// Protected routes
router.get('/', authMiddleware, getAllUsers)

// Public routes
router.post('/', createUser)
router.post('/login', loginUser)

export default router
