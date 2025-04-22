import express from 'express'
import {getAllUsers, createUser, loginUser} from '../controllers/users.controller.js'

const router = express.Router()

router.get('/', getAllUsers)
router.post('/', createUser)
router.post('/login', loginUser)

export default router
