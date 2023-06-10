import mongoose, { Document, Schema } from 'mongoose';

export interface ISubTask extends Document {
  title: string;
  isCompleted: boolean;
  taskId: Schema.Types.ObjectId;
}

const SubTaskSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },

  taskId: {
    type: Schema.Types.ObjectId,
    required: [true, 'A subtask must belong to a task'],
    ref: 'Task',
  },
});

export default mongoose.model<ISubTask>('SubTask', SubTaskSchema);
