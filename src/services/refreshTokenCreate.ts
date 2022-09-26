import { PrismaClient } from '@prisma/client';
import err_message from '../errors/error-responses';


const prisma = new PrismaClient()

const saveToken = async (token: any) => {
    await prisma.$connect();
    try {
        const refToken = await prisma.refreshToken.create({
            data: {
                empeId: token.empeId,
                refreshToken: token.refreshToken
            }
        })
        return refToken;
        // return refreshTokenSchema.create(token);
    }
    catch (err) {
        console.log({
            message: err_message.db_err,
            error: err
        })
    }
}

export default saveToken;