import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const users = async () => {
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
    return
}

const main = async () => {
    await users()
}

main()
