import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoute from './routes/PostRoute';
import userRoute from './routes/UserRoute';

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    'mongodb+srv://josephOri2023:coder2005@cluster0.rbivpfa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  );
}

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(express.json());

app.use(cors());

app.use('/post', postRoute);
app.use('/user', userRoute);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
