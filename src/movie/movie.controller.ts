import { Controller, Post, Body, Get } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './movie.schema/movie.interface';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post('create')
  async create(@Body() createMovieDto: { moviename: string }): Promise<Movie> {
    const { moviename } = createMovieDto;
    return this.movieService.createMovie(moviename);
  }

  @Post('rate')
  async rate(@Body() rateMovieDto: { movieId: string; userId: string; rating: number }): Promise<Movie> {
    const { movieId, userId, rating } = rateMovieDto;
    return this.movieService.addRating(movieId, userId, rating);
  }

  @Get('getall')
  async findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }
}
