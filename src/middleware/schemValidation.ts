import err_message from '../errors/error-responses';
import express from 'express'
import service from '../services/index';

const employeeSchema = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.body.email) {
        if (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(req.body.email)) {
            const email:any = await service.exitEmail(req.body.email);
            if (email) {
                return res.send({ errorMessage: err_message.al_exist, email:email })
            }
            if (req.body.number) {
                if (/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(req.body.number)) {
                    next()
                }
                else {
                    return res.send({
                        errorMessage: err_message.numberNotValid
                    });
                };
            }
            else {
                return res.send({
                    errorMessage: err_message.required
                });
            };
        }
        else {
            return res.send({
                errorMessage: err_message.emailRequired
            });
        };
    }
    else {
        return res.send({
            errorMessage: err_message.required
        });
    };
};

export default employeeSchema;