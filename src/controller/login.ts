import createServ from '../services/index';
import { Request, Response } from "express";
import access from '../helper/access-token';
import refresh from '../helper/refresh-token';
import success from '../responses/Success-responses';
import error from '../errors/error-responses';

const loginEmployee = {
    // login end Point
    loginEmp: async (req: Request, res: Response) => {
        if (req.body.validatePass && req.body.validateEmployee) {

            const accessToken = await access(req.body.validateEmployee.id);
            const refreshToken = await refresh(req.body.validateEmployee.id);

            if (accessToken && refreshToken) {
                const refreshTokData = {
                    empeId: req.body.validateEmployee.id,
                    refreshToken: refreshToken
                }
                createServ.refreshTokenCreate(refreshTokData)
                return res.
                    cookie("token", accessToken)
                    .send({
                        message: success.succeeded,
                        token: accessToken,
                    });
            }
            else {
                return res.send({
                    error: error.no_token
                })
            }
        }
        else {
            res.send({
                message: error.not_exist,
            });
        };
    },
}

export default loginEmployee.loginEmp;
