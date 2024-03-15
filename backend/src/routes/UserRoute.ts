import express from 'express';
import { signup } from '../controllers/UserController';

const userRoute = express.Router();

userRoute.post('/register', signup);

export default userRoute;
