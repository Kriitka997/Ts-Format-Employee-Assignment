import { PrismaClient } from '@prisma/client';
import err_message from '../errors/error-responses';

const prisma = new PrismaClient()


const createEmp = async (employeeData: any) => {
    await prisma.$connect();
    try {
        const updateOrCreateEmp = await prisma.employeeSchema.create({
            data: {
                first_name: employeeData.first_name,
                last_name: employeeData.last_name,
                email_id: employeeData.email_id,
                profile: employeeData.profile,
                phone_number: employeeData.phone_number,
                emp_password: employeeData.emp_password,
            },
        });
        return updateOrCreateEmp;
    }
    catch (err) {
        console.log({
            message: err_message.db_err,
            error: err
        })
    }
}
export default createEmp;
