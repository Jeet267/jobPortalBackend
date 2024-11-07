import express from 'express';
// import { register,login, updateProfile,logout} from '../controllers/user.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js'
import { getAllJobs, postJob , getJobById,getAdminJobs} from '../controllers/job.controllers.js';
const router = express.Router();
router.route("/post").post(isAuthenticated,postJob);
router.route("/get").get(isAuthenticated,getAllJobs);
router.route("/get/:id").get(isAuthenticated,getJobById)
router.route("/getAdminJobs").get(isAuthenticated,getAdminJobs)
export default jobRoute;


