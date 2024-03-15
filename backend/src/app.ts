import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import multer from 'multer';
import postRoute from './routes/PostRoute';
import userRoute from './routes/UserRoute';

const upload = multer({
  dest: 'uploads/',
});

dotenv.config();

const { MONGODB_USER, MONGODB_PASSWORD } = process.env;

async function main() {
  await mongoose.connect(
    `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@cluster0.rbivpfa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
`
  );
}

main().catch((err) => console.log(err));

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(express.json());

app.use(cors());

app.use('/post', upload.single('postImage'), postRoute);
app.use('/auth', userRoute);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
