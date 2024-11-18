import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieService } from './movie.service';
import { MovieSchema } from './movie.schema/movie.schema';
import { MovieController } from './movie.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Movie', schema: MovieSchema }])],
  providers: [MovieService],
  controllers: [MovieController],
})
export class MovieModule {}
