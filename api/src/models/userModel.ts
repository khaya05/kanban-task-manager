import mongoose, { Document, Schema } from 'mongoose';
import validator from 'validator';

export interface IUser extends Document {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  photo: string;
}

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'User must have a name'],
      max: [40, 'A name cannot be more than 40 characters'],
    },
    username: {
      type: String,
      unique: [true, 'Username must be unique'],
      required: [true, 'User must have a username'],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 8,
      select: false,
    },
    confirmPassword: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: 'default.jpg',
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre<IUser>('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  if (this.password !== this.confirmPassword) {
    throw new Error('Passwords do not match');
  }

  next();
});

export default mongoose.model<IUser>('User', UserSchema);
