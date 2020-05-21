import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MovieService {
  movies: Observable<any[]>;
  movieUrl = 'https://api.themoviedb.org/3/search/movie?query=${title}&api_key=8caa54fd5e1463137672ebbd6c42fee1';

  constructor(public http: HttpClient) { }

  getMovies(): Observable<Movies []> {
    // const url =`https://api.themoviedb.org/3/search/movie?query=${title}&api_key=8caa54fd5e1463137672ebbd6c42fee1`;
    console.log('URL', url);
    return this.http.get(url);
  }
}