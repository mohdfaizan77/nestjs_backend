import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie } from './movie.schema/movie.interface';

@Injectable()
export class MovieService {
  constructor(@InjectModel('Movie') private readonly movieModel: Model<Movie>) {}

  async createMovie(moviename: string): Promise<Movie> {
    const newMovie = new this.movieModel({ moviename, ratings: [] });
    return await newMovie.save();
  }

  async addRating(movieId: string, userId: string, rating: number): Promise<Movie> {
    return await this.movieModel.findByIdAndUpdate(
      movieId,
      { $push: { ratings: { user: userId, rating } } },
      { new: true, useFindAndModify: false }
    );
  }

  async findAll(): Promise<Movie[]> {
    return await this.movieModel.find().populate('ratings.user').exec();
  }
}
