import { NextFunction } from 'express';
import mongoose, { Document, Schema } from 'mongoose';

export interface IColumn extends Document {
  name: string;
  boardId: Schema.Types.ObjectId;
}

const columnSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'A column must have a name'],
    unique: true,
  },
  boardId: {
    type: Schema.Types.ObjectId,
    required: [true, 'A column must belong to a board'],
    ref: 'Board',
  },
});

// populate board
columnSchema.pre<IColumn>(/^find/, function (next: NextFunction) {
  this.populate({
    path: 'boardId',
    select: 'name -userId'
  });
  next()
});

export default mongoose.model<IColumn>('Column', columnSchema);
