import jwt from 'jsonwebtoken';
import express from 'express';

const authenticateUser = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const authToken = req.headers.authorization;
    if (authToken) {

        let sliceToken = authToken.slice(13, authToken.length - 9);

        jwt.verify(sliceToken, 'accessToken', (err: any, employee: any) => {
            if (err) {
                res.send({
                    status: 404,
                    error: err
                })
            }
            else {
                req.query = employee;                
                next()
            }
        });
    };
};

export default authenticateUser;