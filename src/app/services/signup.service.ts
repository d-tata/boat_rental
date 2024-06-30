import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const Base_URL = ["http://localhost:8080"];

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  constructor(private http: HttpClient,
    private router:Router
  ) { }

  registerUser(user:User):Observable<any> {   
    return this.http.post(Base_URL+"/api/auth/signup", user);
  }

}
