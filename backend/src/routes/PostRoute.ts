import express, { Request, Response } from 'express';
import Post from '../models/PostModel';

const postRoute = express.Router();

postRoute.get('/', async (req: Request, res: Response) => {
  try {
    const data = await Post.find();
    return res
      .status(200)
      .send({ success: 'Received posts successfully', data });
  } catch (error) {
    return res.status(400).send({ message: (error as Error).message });
  }
});

postRoute.post('/', async (req: Request, res: Response) => {
  try {
    const post = new Post({
      caption: req.body.caption,
      postImage: req.file.filename,
    });
    await post.save();
    return res.status(201).send({
      success: 'Your post was successfully added',
      post,
    });
  } catch (error) {
    return res.status(400).send({ message: (error as Error).message });
  }
});

export default postRoute;
