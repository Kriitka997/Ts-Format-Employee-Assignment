import { Request, Response } from "express";
import createServ from '../services/index';
import err_message from '../errors/error-responses';
import success_resp from '../responses/Success-responses';

const getEmpById = {
    getEmployeeById: async (req: Request, res: Response) => {
        const Employee = await createServ.getById(req.query.ID);
        console.log(Employee)
        if (Employee) {
            const findById = await createServ.getById(req.params.id);
            if (findById) {
                return res.send({
                    message: success_resp.Employee,
                    meta_data: findById
                });
            }
            else {
                return res.send({
                    error: err_message.not_exist
                });
            };
        }
        else {
            return res.send({
                error: err_message.login
            });
        };
    },
}

export default getEmpById.getEmployeeById;
