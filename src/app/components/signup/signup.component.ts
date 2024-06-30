import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';

import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  standalone : true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

constructor(private signUpService:SignupService,
  private router:Router
){}

  signupForm = new FormGroup({ 
    name: new FormControl ('', Validators.required),
    surname: new FormControl ('', Validators.required),
    email: new FormControl ('', Validators.required),
    password: new FormControl ('', Validators.required),
    phoneNumber: new FormControl ('', Validators.required),
  });

  register () {
    console.log(this.signupForm.value);
    this.signUpService.registerUser(this.signupForm.value as User).subscribe((res)=> {
       if(res.id !=null){
        alert("Successfully registered, procced to login");
        this.router.navigateByUrl('/login');
       } else {
        alert("registration failed, please try again");
        this.router.navigateByUrl('/register');
       }

    });
  }
}

