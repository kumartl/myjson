import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  })
  export class UsersService { 
    private jsonUrl = 'assets/users.json'; 
    constructor(private http: HttpClient) {}
    getUsers() {
        return this.http.get<any[]>(this.jsonUrl);
      }

  }