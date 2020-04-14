import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {

  constructor(public http: HttpClient) { }

  getMovies(title) {
    const url =`https://api.themoviedb.org/3/search/movie?query=${title}&api_key=8caa54fd5e1463137672ebbd6c42fee1`;
    console.log('URL', url);
    return this.http.get(url);
  }
}