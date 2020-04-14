import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  title = 'final-project-front';
  movie: string = '';
  movies;
  movieSearch;
  posterPathURL: string = 'https://image.tmdb.org/t/p/w500/';

  constructor(public movieService: MovieService) { }

  getMovies() {
    this.movieService.getMovies(this.movieSearch)
      .subscribe(res => {
        this.movies = res;
        // const posterImage = 'https://image.tmdb.org/t/p/w500/' + this.movies.result.poster_path;
        console.log('results', this.movies);
      });
  }

}
