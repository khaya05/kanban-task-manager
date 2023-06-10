import { NextFunction } from 'express';
import mongoose, { Document, Schema } from 'mongoose';

export interface ITask extends Document {
  title: string;
  description: string;
  status: mongoose.Types.ObjectId;
  subtasks: mongoose.Types.ObjectId[];
}

const TaskSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: Schema.Types.ObjectId,
    ref: 'Column',
    required: true,
  },
  subtasks: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'SubTask',
    },
  ],
});

// populate status
TaskSchema.pre<ITask>(/^find/, function (next: NextFunction) {
  this.populate({
    path: 'status',
    select: 'name -boardId',
  });
  next();
});

// populate subtask
TaskSchema.pre<ITask>(/^find/, function (next: NextFunction) {
  this.populate({
    path: 'subtasks',
  });
  next();
});

export default mongoose.model<ITask>('Task', TaskSchema);
