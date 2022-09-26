import { PrismaClient } from '@prisma/client';
import err_message from '../errors/error-responses';


const prisma = new PrismaClient()

const editEmployee = async (employeeData: any, id: any) => {
    await prisma.$connect();
    try {
        const updateEmp = await prisma.employeeSchema.update({
            where: {
                id: id,
            },
            data: {
                first_name: employeeData.first_name,
                last_name: employeeData.last_name,
                email_id: employeeData.email_id,
                profile: employeeData.profile,
                phone_number: employeeData.phone_number,
                emp_password: employeeData.emp_password,
            },
        });
        return updateEmp;
    }
    catch (err) {
        console.log({
            message: err_message.db_err,
            error: err
        })
    }
}
export default editEmployee