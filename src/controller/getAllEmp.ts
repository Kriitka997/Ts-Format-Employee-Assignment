import { Request, Response } from "express";
import createServ from '../services/index';
import err_message from '../errors/error-responses';
import success_resp from '../responses/Success-responses';

const getAllUsers = async (req: Request, res: Response) => {
    const Employee = await createServ.getById(req.query.ID);

    if (Employee) {
        let { page, limit } = req.query
        const employeeList = await createServ.getAll(page, limit);
        if (employeeList) {
            return res.send({
                message: success_resp.AllEmployeeList,
                meta_data: employeeList
            })
        }
        else {
            return res.send({
                error: err_message.not_done
            })
        }
    }
    else {
        return res.send({
            error: err_message.login
        });
    };
}

export default getAllUsers;

