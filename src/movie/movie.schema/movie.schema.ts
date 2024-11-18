import { Schema } from 'mongoose';

export const MovieSchema = new Schema({
  moviename: {
    type: String,
    trim: true,
    required: true,
  },
  ratings: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      rating: {
        type: Number,
        min: 1,
        max: 10,
        required: true,
      },
    },
  ],
});
