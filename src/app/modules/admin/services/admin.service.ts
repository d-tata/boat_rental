import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/services/storage/storage.service';

const BASIC_URL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor( private http: HttpClient) { }

    postBoat(boatDto:any):Observable<any>{
    return this.http.post(BASIC_URL+"/api/admin/boat", boatDto,{
       headers:this.createAuthorizationHeader()
    });
}

    getAllboats():Observable<any> {
      return this.http.get(BASIC_URL+"/api/admin/boats",{
         headers:this.createAuthorizationHeader()
      });
    }

    deleteBoat(id: number):Observable<any>{
      return this.http.delete(BASIC_URL+"/api/admin/boats/" + id ,{
        headers:this.createAuthorizationHeader()
      });
    }

    getBoatByid(id: number):Observable<any>{
      return this.http.get(BASIC_URL+"/api/admin/boat/" + id ,{
        headers:this.createAuthorizationHeader()
      });
    }

    updateBoat(boatId : number, boatDto: any):Observable<any>{
      return this.http.put(BASIC_URL+"/api/admin/boat/" + boatId ,boatDto, {
        headers:this.createAuthorizationHeader()
      });
    }

    getAllrents():Observable<any> {
      return this.http.get(BASIC_URL+"/rents/all",{
         headers:this.createAuthorizationHeader()
      });
    }

    deleteRent(rentId : number):Observable<any> {
      return this.http.delete(BASIC_URL+"/rents/delete/" + rentId,{
         headers:this.createAuthorizationHeader()
      });
    }

    changeStatus(rentId : number, status: string ):Observable<any> {
      return this.http.get(BASIC_URL+'/api/admin/rents/${rentId}/${status}',{
         headers:this.createAuthorizationHeader()
      });
    }

    searchBoat(searchboatDto:any):Observable<any>{
      return this.http.post(BASIC_URL+"/api/admin/boat/search", searchboatDto,{
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
