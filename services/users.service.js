import prisma from '../db.js'

export const getAll = async () => {
    return await prisma.user.findMany({
        select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            password: false
        }
    })
}

export const create = async (user) => {
    await prisma.user.create({
        data: {
            ...user,
            password: 'randompassword'
        }
    })
}
