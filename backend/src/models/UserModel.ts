import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Your email address is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Your password is required'],
  },
});

const UserModel = mongoose.model('user', UserSchema);

export default UserModel;
