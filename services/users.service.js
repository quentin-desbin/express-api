const users = []

export const getAll = () => {
    return users
}

export const create = (user) => {
    users.push({
        id: users.length + 1,
        ...user
    })
}
