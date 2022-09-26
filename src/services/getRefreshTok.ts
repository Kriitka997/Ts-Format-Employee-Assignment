import { PrismaClient } from '@prisma/client';
import err_message from '../errors/error-responses';


const prisma = new PrismaClient()

const getRefreshToken = async (empId: any) => {
    try {
        const tasksdata = await prisma.refreshToken.findMany({
            where: {
                empeId: empId
            }
        });
        return tasksdata[0].refreshToken

        // return refreshTokenSchema.findOne({ EmployeeID: empId })
    }
    catch (err) {
        console.log({
            message: err_message.db_err,
            error: err
        })
    }
}

export default getRefreshToken;