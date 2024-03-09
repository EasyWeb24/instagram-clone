import express, { Request, Response } from 'express';
import User from '../models/UserModel';

const userRoute = express.Router();

userRoute.post('/', async (req: Request, res: Response) => {
  try {
    const user = new User({
      email: req.body.email,
    });

    const data = await user.save();

    const existingUser = await User.findOne({ email: req.body.email });

    if (exsitingUser)
      return res.status(400).send({ message: 'User already exists' });

    return res.status(201).send({ message: 'User successfully created', data });
  } catch (error) {
    return res.status(400).send({ message: (error as Error).message });
  }
});

export default userRoute;
