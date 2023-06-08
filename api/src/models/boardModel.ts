import { NextFunction } from 'express';
import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './userModel';

export interface IBoard extends Document {
  name: string;
  userId: IUser['_id'];
}

const boardSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'A board must have a name'],
    unique: true,
    default: 'untitled-board',
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: [true, 'A board must belong to a user'],
    ref: 'User',
  },
});

// Pre-middleware to populate the user field and select only necessary fields
boardSchema.pre<IBoard>(/^find/, function (next: NextFunction) {
  this.populate({
    path: 'userId',
    select: 'name email',
  });
  next();
});

export default mongoose.model<IBoard>('Board', boardSchema);
