import { Component } from '@angular/core';
import { ApiService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'final-project-front';
  movies;
  movieSearch;
  posterPathURL: string = 'http://image.tmdb.org/t/p/w92';
  constructor(public api: ApiService) {}
  //  ngOnInit() {
  //    this.api.getMovies()
  //     .subscribe(res => {
  //       this.movies = res;
  //       // const posterImage = 'https://image.tmdb.org/t/p/w500/' + this.movies.result.poster_path;
  //       console.log('results', this.movies);
  //     });
  //  }
   getMovies() {
      this.api.getMovies(this.movieSearch)
      .subscribe(res => {
        this.movies = res;
        // const posterImage = 'https://image.tmdb.org/t/p/w500/' + this.movies.result.poster_path;
        console.log('results', this.movies);
      });
   }

}







