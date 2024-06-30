import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { StorageService } from 'src/app/services/storage/storage.service';


const BASIC_URL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  
  getAllboats():Observable<any> {
    return this.http.get(BASIC_URL+"/boat/available",{
       headers:this.createAuthorizationHeader()
    });
  }
  
  getboatById(boatId: number):Observable<any> {
    return this.http.get(BASIC_URL+"/boat/find/" + boatId ,{
       headers:this.createAuthorizationHeader()
    });
  }

  rentBoat(rentDto: any):Observable<any> {
    console.log(rentDto.value);
    return this.http.post(BASIC_URL+"/rents/add" , rentDto ,{
       headers:this.createAuthorizationHeader()
    });
  }

  getRentByUserId():Observable<any> {
    return this.http.get(BASIC_URL+"/api/rents/" + StorageService.getUserId ,{
       headers:this.createAuthorizationHeader()
    });
  }
  
  createAuthorizationHeader(): HttpHeaders {
    let authHeaders : HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer ' + StorageService.getToken()
    );
  }

}
