import mongoose, { Document, Schema } from 'mongoose';

export interface ISubTask extends Document {
  title: string;
  isCompleted: boolean;
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
});

export default mongoose.model<ISubTask>('SubTask', SubTaskSchema);
