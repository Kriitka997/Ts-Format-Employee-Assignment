import { Request, Response } from "express";
import createServ from '../services/index';
import err_message from '../errors/error-responses';
import success_resp from '../responses/Success-responses';

const deleteEmployee = async (req: Request, res: Response) => {
    const employeeAuth: any = await createServ.getById(req.query.ID);
    if (employeeAuth["id"] == req.params.id) {
        const deleteEmployee = await createServ.deleteEmp(req.params.id);
        if (deleteEmployee) {
            return res.send({
                message: success_resp.deleted
            });
        }
        else {
            return res.send({
                error: err_message.not_done
            });
        };
    }
    else {
        return res.send({
            error: err_message.un_authorized
        });
    };
}

export default deleteEmployee;
