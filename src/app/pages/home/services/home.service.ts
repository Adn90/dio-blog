import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { News } from './news';
import { map, mergeAll, mergeMap, Observable } from 'rxjs';
import { Articles } from './articles';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  private readonly newsApi = 'https://newsapi.org/v2/everything?q=keyword&apiKey=43467301647e4a42b355eecda475076a';
  
  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get<News>(this.newsApi);
  }

}