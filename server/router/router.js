import { Router } from "express";
import * as controller from '../controllers/appController.js';
import Auth , {localVariables} from '../middleware/auth.js'
import {registerMail} from '../controllers/mailer.js'
const router = Router();

/*Post Method*/
router.route('/register').post(controller.register); // register user
router.route('/registerMail').post(registerMail); // send the email
router.route('/authenticate').post(controller.verifyUser,(req, res) => res.end()); // authenticate user

//this middleware first verify the user then move to the login route , if there is a valid user in the mongodb database 
// then only check for the password else return the error msg from this middleware
router.route('/login').post(controller.verifyUser,controller.login); // login in app


/** GET Methods */
router.route('/user/:username').get(controller.getUser) // user with username
router.route('/generateOTP').get(controller.verifyUser,localVariables,controller.generateOTP) // generate random OTP
router.route('/verifyOTP').get(controller.verifyOTP) // verify generated OTP
router.route('/createResetSession').get(controller.createResetSession) // reset all the variables


/** PUT Methods */
router.route('/updateuser').put(Auth,controller.updateUser); // is use to update the user profile
router.route('/resetPassword').put(controller.verifyUser, controller.resetPassword); // use to reset password

export default router;