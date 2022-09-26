import express from 'express';
import reCreateAccToken from '../helper/re-access-tok-token';

const Tokroute = express.Router();

Tokroute.post("/:id",reCreateAccToken)

export default Tokroute;