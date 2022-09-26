import jwt from "jsonwebtoken";
import isTokenExit from "../services/index";
import createToken from "./access-token";
import express from 'express';

// create access token after expire of it.
const reAccessToken = async (req: express.Request, res: express.Response) => {
    const tokenResponse:any = await isTokenExit.getRefToken(req.params.id);
    if (tokenResponse) {
        jwt.verify(tokenResponse, 'refreshToken', (err: any, employee: any) => {
            if (err) {
                res.send({
                    error: err
                });
            }
            else {
                const accessToken = createToken(employee.ID);
                res.status(200).cookie('token', accessToken)
                    .send({
                        message: "re genrated access token",
                        token: accessToken
                    });
            };
        });
    };
};

export default reAccessToken;