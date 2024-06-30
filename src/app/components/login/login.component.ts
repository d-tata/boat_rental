import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/services/login.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-login',
  standalone : true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb:FormBuilder ,private loginService : LoginService,
    private router:Router
  ){

  }
  loginForm = new FormGroup({ 
    email: new FormControl ('', Validators.required),
    password: new FormControl ('', Validators.required)
  });

 login(){
  console.log(this.loginForm.value);
  this.loginService.loginUser(this.loginForm.value as User).subscribe
  ((res) => { 
    if(res.customerId != null) {
      const user = { 
      id: res.customerId,
      role:res.customerRole
    }
    // window.alert("Login was successfull bitch");
    StorageService.saveUser(user);
    StorageService.saveToken(res.jwt);
    if (StorageService.isAdminLoggedin()){
    this.router.navigateByUrl('/admin/dashboard');
    }else if (StorageService.isCustomerLoggedin()){
      this.router.navigateByUrl('/customer/dashboard');
    }else {}
       //TODO error message for not a customer or Admin 
  

    
 } else {}
  });
}

}
