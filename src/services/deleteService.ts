import { PrismaClient } from '@prisma/client';
import err_message from '../errors/error-responses';


const prisma = new PrismaClient()

const deleteEmpById = async (deleteDataId: any) => {
        try {
            const deleted = await prisma.employeeSchema.delete({
                where: {
                    id: deleteDataId,
                },
            });
            return deleted
        }
        catch (err) {
            console.log({
                message: err_message.db_err,
                error: err
            })
        }
    }
export default deleteEmpById;