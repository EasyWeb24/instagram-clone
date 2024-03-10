import express from 'express';
import { signup } from '../controllers/UserController';

const userRoute = express.Router();

userRoute.post('/', signup);

export default userRoute;
