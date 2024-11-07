import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js'

import { getComapny, getComapnyById, registerCompany, updateCompany } from '../controllers/company.controllers.js';

const router = express.Router();
router.route("/register").post(isAuthenticated,registerCompany);
router.route("/get").get(isAuthenticated,getComapny);
router.route("/get/:id").get(isAuthenticated,getComapnyById)
router.route("/update/:id").put(isAuthenticated,updateCompany)
export default companyRoute;

