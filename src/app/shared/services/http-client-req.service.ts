import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientReqService {

  constructor(private http: HttpClient) { }

  getPosts(url): Observable<any> {
    return this.http.get(url);
  }
}
