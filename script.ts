import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const createUser = async () => {
    await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'test1@example.com',
        },
    })
    console.log('User created!')
    return
}

const users = async () => {
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
    return
}

// createUser()
//     .catch((e) => {
//         console.error(e)
//     })
users()
