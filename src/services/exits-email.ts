import err_message from '../errors/error-responses';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const findExitEmail = async (employee: any) => {
    try {
        const tasksdata = await prisma.employeeSchema.findMany({
            where: {
                email_id: employee,
            }
        });
        return tasksdata[0].email_id;
    }
    catch (err) {
        console.log({
            message: err_message.db_err,
            error: err
        })
    }
}

export default findExitEmail;
