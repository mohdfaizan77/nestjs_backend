import { Document, Types } from 'mongoose';

export interface Rating {
  user: Types.ObjectId; 
  rating: number;      
}

export interface Movie extends Document {
  readonly moviename: string;
  readonly ratings: Rating[];
}
