import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class MyCardService {
  private cardUrl = 'assets/mycard.json';
    constructor(private http: HttpClient) {}

    getCourses() {
      return this.http.get<any[]>(this.cardUrl);
    }

}