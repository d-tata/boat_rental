import { Injectable } from '@angular/core';


const TOKEN = "token";
const USER  = "user";


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  static saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

 
  static saveUser(user: any): void {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user) );
  }

  static getUserId(): string {
    const user = this.getUser();
    if (user == null) {return '';}
    return user.id;
  }

  static getToken() {
    return window.localStorage.getItem(TOKEN);
  }

  static getUser() {
    return JSON.parse(localStorage.getItem(USER)||'{}');
  }

  static getUserRole(): string {
    const user = this.getUser();
    if (user == null) return "";
    return user.role;
  }
  
  static isAdminLoggedin():boolean {
    if(this.getToken()== null) return false;
    const role : string = this.getUserRole();
    return role == "ADMIN";
  }

  static isCustomerLoggedin():boolean {
    if(this.getToken()== null) return false;
    const role : string = this.getUserRole();
    return role == "CUSTOMER";
  }

  static logout(): void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
  }
  
}
