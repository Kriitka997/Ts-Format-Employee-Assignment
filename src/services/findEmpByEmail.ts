import { PrismaClient } from '@prisma/client';
import err_message from '../errors/error-responses';


const prisma = new PrismaClient()

const findUserByEmail = async (employee: any) => {
    try {
        const tasksdata = await prisma.employeeSchema.findUnique({
            where: {
                email_id: employee,
            },
            select: {
                id: true,
                first_name: true,
                last_name: true,
                email_id: true,
                profile: true,
                phone_number: true,
                emp_password: true,
            },
        });
        return tasksdata
    }
    catch (err) {
        console.log({
            message: err_message.db_err,
            error: err
        })
    }
}

export default findUserByEmail;
