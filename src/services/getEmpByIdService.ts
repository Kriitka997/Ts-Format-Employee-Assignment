import { PrismaClient } from '@prisma/client';
import err_message from '../errors/error-responses';


const prisma = new PrismaClient()

const findUserByID = async (employeeID: any) => {
        try {
            const tasksdata = await prisma.employeeSchema.findUnique({
                where: {
                    id: employeeID
                }
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

export default findUserByID;
