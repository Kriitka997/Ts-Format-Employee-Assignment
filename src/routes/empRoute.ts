import express from 'express';
import employeeControllers from '../controller/EmployeeControllers';
import middleWares from '../middleware/index';
const emplRoute = express.Router();


emplRoute.post("/create", middleWares.multer.single('images'), middleWares.schemaValidate,
    middleWares.hashPass, employeeControllers.createEmp);

emplRoute.delete("/delete/:id", middleWares.auth, employeeControllers.deleteEmp);

emplRoute.put("/edit/:id", middleWares.auth, middleWares.multer.single('images'), middleWares.schemaValidate, employeeControllers.editEmp);

emplRoute.get("/all", middleWares.auth, employeeControllers.getAllEmp);

emplRoute.get("/emp/:id", middleWares.auth, employeeControllers.getById);

emplRoute.post("/login", middleWares.passVerfiy, employeeControllers.loginEmp)


export default emplRoute;