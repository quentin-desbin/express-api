import { getAll, create } from '../services/users.service.js'
import APIError from '../errors/APIError.js'

export const getAllUsers = (req, res) => {
    res.json({
        success: true,
        users: getAll()
    })
}

export const createUser = (req, res) => {
    const { firstName, lastName } = req.body

    if (!firstName || !lastName) {
        throw new APIError('First name and last name is required', 400)
    }

    // Call the service
    create({ firstName, lastName })

    res.status(201).json({
        success: true,
        message: 'User has been created'
    })
}
