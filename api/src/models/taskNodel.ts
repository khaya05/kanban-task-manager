import mongoose, { Document, Schema } from 'mongoose';

export interface ITask extends Document {
  name: string;
  description: string;
  status: mongoose.Types.ObjectId;
  subtasks: string[];
}

const taskSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'A task must have a name'],
  },
  description: {
    type: String,
    required: [true, 'A task must have a description'],
  },
  status: {
    type: mongoose.Types.ObjectId,
    ref: 'Board',
    required: [true, 'A task must have a status'],
  },
  subtasks: [{ type: String }],
});

export default mongoose.model<ITask>('Task', taskSchema);
