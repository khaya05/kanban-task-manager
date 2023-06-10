import mongoose, { Document, Schema } from 'mongoose';

export interface ITask extends Document {
  name: string;
  status: mongoose.Types.ObjectId;
  subTasks: mongoose.Types.ObjectId[];
}

const TaskSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  columnId: {
    type: Schema.Types.ObjectId,
    ref: 'Column',
    required: true,
  }
});

export default mongoose.model<ITask>('Task', TaskSchema);
