import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  body: { type: String, required: true },
  createdAt: { type: Date, required: false, default: new Date() },
});

const Post = mongoose.model('post', PostSchema);

export default Post;
