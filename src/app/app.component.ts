import { Component } from '@angular/core';
import { MovieService } from './movie.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
        console.log('results', this.movies);
      });
  }
}






