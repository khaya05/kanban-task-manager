import mongoose, { Document, Schema } from 'mongoose';

export interface ITask extends Document {
  name: string;
  status: mongoose.Types.ObjectId;
  subTasks: mongoose.Types.ObjectId[];
}

const TaskSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: Schema.Types.ObjectId,
    ref: 'Column',
    required: true,
  },
  subTasks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'SubTask',
    },
  ],
});

export default mongoose.model<ITask>('Task', TaskSchema);
