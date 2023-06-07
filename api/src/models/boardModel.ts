import mongoose, { Schema, Document } from 'mongoose';

interface IBoard extends Document {
  name: string;
  owner: mongoose.Types.ObjectId;
}

const columnSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'A board must have a name'],
    unique: true,
    default: 'untitled-column',
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: [true, 'A column must belong to a user'],
    ref: 'User',
  },
});

export default mongoose.model<IBoard>('Board', columnSchema);
