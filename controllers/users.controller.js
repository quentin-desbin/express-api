import { getAll, create } from '../services/users.service.js'
import APIError from '../errors/APIError.js'

export const getAllUsers = async (req, res) => {
    res.json({
        success: true,
        users: await getAll()
    })
}

export const createUser = async (req, res) => {
    const { firstName, lastName, email } = req.body

    // Call the service
    const userCreated = await create({ firstName, lastName, email })

    res.status(201).json({
        success: true,
        message: 'User has been created',
        user: userCreated
    })
}
