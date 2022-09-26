import { Request, Response } from "express";
import createServ from '../services/index';
import err_message from '../errors/error-responses';
import success_resp from '../responses/Success-responses';

const creatEmp = {
    createEmpl: async (req: Request, res: Response) => {

        const employeePayload = {
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email_id: req.body.email,
            profile: req.file?.path,
            phone_number: req.body.number,
            emp_password: req.body.password
        };
        employeePayload["emp_password"] = req.query.hashPassword;
        const emplCreated = await createServ.create(employeePayload);
        if (emplCreated) {
            res.send({
                message: success_resp.succeeded,
                payload: emplCreated
            })
        }
        else {
            res.send({
                message: err_message.not_done,
            })
        }
    },
}

export default creatEmp.createEmpl;