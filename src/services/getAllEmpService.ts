import { PrismaClient } from '@prisma/client';
import err_message from '../errors/error-responses';


const prisma = new PrismaClient()

const getAllEmployees = async (page: any, limit: any) => {
    try {
        const tasks = await prisma.employeeSchema.findMany({
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
        return tasks
    }
    catch (err) {
        console.log({
            errorMessage: err_message.db_err,
            error: err
        })
    }
}

export default getAllEmployees;
