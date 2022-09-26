import create from "./createService";
import update from './editService';
import deleteEmp from "./deleteService";
import getAll from './getAllEmpService';
import getById from './getEmpByIdService';
import findEmailLogin from "./findEmpByEmail";
import refreshTokenCreate from './refreshTokenCreate';
import getRefToken from './getRefreshTok';
import exitEmail from './exits-email';

export default {
    create,
    update,
    deleteEmp,
    getAll,
    getById,
    refreshTokenCreate,
    findEmailLogin,
    getRefToken,
    exitEmail
}