import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/UserModel';
import jwt from 'jsonwebtoken';

export const signup = async (req: Request, res: Response) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser)
      return res.status(400).send({ message: 'User already exists' });

    bcrypt.genSalt(10, (err, salt) => {
      res.status(400).send({ message: (err as Error).message });

      bcrypt.hash(req.body.password, salt, async (err, hash) => {
        if (err)
          return res.status(400).send({ message: (err as Error).message });

        const user = new User({
          email: req.body.email,
          password: hash,
        });
        await user.save();

        const token = jwt.sign(user, process.env.TOKEN_SECRET, {
          expiresIn: '30d',
        });

        return res
          .status(201)
          .send({ message: 'User successfully created', user, token });
      });
    });
  } catch (error) {
    return res.status(500).send({ message: (error as Error).message });
  }
};
