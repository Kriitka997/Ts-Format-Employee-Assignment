import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt';
import err_message from '../errors/error-responses';

var salt = 10;

const hashPassword = async (req: Request, res: Response, next: NextFunction) => {

    if (req.body.password) {
        if (req.body.confirm_password) {
            if (req.body.password.match(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,12})"))) {
                if (req.body.password === req.body.confirm_password) {
                    const hashPass = await bcrypt.hash(req.body.password, salt);
                    req.query.hashPassword = hashPass;
                    next()
                }
                else {
                    return res.send({
                        error: err_message.comparePass
                    });
                };
            }
            else {
                return res.send({
                    error: err_message.validPassword
                });
            }
        }
        else {
            return res.send({
                errorMessage: err_message.confirmPass
            });
        }
    }
    else {
        return res.send({
            errorMessage: err_message.required
        });
    }
}
export default hashPassword;