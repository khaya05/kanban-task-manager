import mongoose, { Schema, Document } from 'mongoose';

export interface IBoard extends Document {
  name: string;
  userId: mongoose.Types.ObjectId;
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

export default mongoose.model<IBoard>('Board', boardSchema);
