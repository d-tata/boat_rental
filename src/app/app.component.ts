import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StorageService } from './services/storage/storage.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone : true,
  imports: [RouterLink, RouterOutlet, LoginComponent, SignupComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'boat-fronted';

  isCustomerLoggedIn : boolean = StorageService.isCustomerLoggedin();
  isAdminLoggedIn: boolean = StorageService.isAdminLoggedin();

  constructor(private router:Router) { }

  ngOnInit() {
    this.router.events.subscribe(event  => {
      if(event.constructor.name === "NavigationEnd"){
        this.isAdminLoggedIn = StorageService.isAdminLoggedin();
        this.isCustomerLoggedIn = StorageService.isCustomerLoggedin();
      }
    })
  }

  logout() {
    StorageService.logout();
    this.router.navigateByUrl("/login");
  }

} 
