import mongoose, { Document, Schema } from 'mongoose';

export interface IColumn extends Document {
  name: string;
  columnId: Schema.Types.ObjectId;
}

const columnSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'A column must have a name'],
    unique: true,
  },
  columnId: {
    type: Schema.Types.ObjectId,
    required: [true, 'A column must belong to a board'],
    ref: 'User',
  },
});

export default mongoose.model<IColumn>('Column', columnSchema)