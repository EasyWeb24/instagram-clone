import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  caption: { type: String, required: true },
  postImage: { type: String, required: true },
  createdAt: { type: Date, required: false, default: new Date() },
});

const Post = mongoose.model('post', PostSchema);

export default Post;
