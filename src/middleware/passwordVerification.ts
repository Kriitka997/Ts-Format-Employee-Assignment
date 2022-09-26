import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt';
import employeeService from '../services/index';
import err_message from '../errors/error-responses';


const empExitAndPassValid = async (req: Request, res: Response, next: NextFunction) => {
    const employeeData = await employeeService.findEmailLogin(req.body.email);
    if (employeeData) {
        const valid = await bcrypt.compare(req.body.password, employeeData["emp_password"]);
        if (valid === true) {
            req.body.validatePass = valid;
            req.body.validateEmployee = employeeData
            next()
        }
        else {
            res.send({
                message: err_message.wrong_pass
            })
        }
    }
    else {
        return res.send({
            error: err_message.not_exist
        })
    }
}
export default empExitAndPassValid