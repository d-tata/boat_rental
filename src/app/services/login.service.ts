import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';



const Base_URL = ["http://localhost:8080"];

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient,
    private router:Router
  ) { }

  loginUser(user:User) {   
    return this.http.post<{
      customerId: null;
      customerRole: any;
      jwt : string;
}>(Base_URL+"/api/auth/login", user);
  }

}