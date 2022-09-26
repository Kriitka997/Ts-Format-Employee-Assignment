import { Request, Response } from "express";
import createServ from '../services/index';
import err_message from '../errors/error-responses';
import success_resp from '../responses/Success-responses';


const EditEmployee = async (req: Request, res: Response) => {

    const employeeUpdateData: any = await createServ.getById(req.query.ID);
    if (employeeUpdateData["id"] == req.params.id) {

        employeeUpdateData.first_name = req.body.firstName;
        employeeUpdateData.last_name = req.body.lastName;
        employeeUpdateData.email_id = req.body.email;
        employeeUpdateData.profile = req.file?.path;
        employeeUpdateData.phone_number = req.body.number;
        const UpdateEmployee = await createServ.update(employeeUpdateData, req.params.id)
        if (UpdateEmployee) {
            return res.send({
                message: success_resp.succeeded,
                meta_data: UpdateEmployee
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
            error: err_message.un_authorized
        })
    }
}

export default EditEmployee;
