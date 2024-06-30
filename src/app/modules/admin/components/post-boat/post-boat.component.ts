import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { BoatRentComponent } from 'src/app/modules/customer/components/boat-rent/boat-rent.component';

@Component({
  selector: 'app-post-boat',
  templateUrl: './post-boat.component.html',
  styleUrls: ['./post-boat.component.css']
})

export class PostBoatComponent {
  postBoatForm !: FormGroup;
  selectedFile: any;
  

  constructor(private fb: FormBuilder , private adminservice:AdminService, private router : Router) { }
  

   ngOnInit() {
    this.postBoatForm = new FormGroup({
      image: new FormControl ( null, Validators.required),
    brand: new FormControl (null, Validators.required),
    model: new FormControl ( null, Validators.required),
    year: new FormControl (null, Validators.required),
    capacity: new FormControl (null, Validators.required),
    price: new FormControl (null, Validators.required),
    availability: new FormControl (true)
    })
  }



  postBoat() {
    console.log(this.postBoatForm.value);
    console.log(this.postBoatForm.get('image')?.value);
    const formData: FormData = new FormData();
    formData.append('image', this.selectedFile);
    formData.append('brand', this.postBoatForm.get('brand')?.value);
    formData.append('model', this.postBoatForm.get('model')?.value);
    formData.append('year', this.postBoatForm.get('year')?.value);
    formData.append('capacity', this.postBoatForm.get('capacity')?.value);
    formData.append('price', this.postBoatForm.get('price')?.value);
    formData.append('availability', this.postBoatForm.get('availability')?.value);
    console.log(formData);

      // const boatData = this.boatForm.value; // Get the form data
    this.adminservice.postBoat(formData).subscribe(
      (response) => {
        this.router.navigateByUrl("/admin/dashboard");
        // Handle success (e.g., show a success message)
        alert('Boat posted successfully:');
    },(error) => {
        // Handle error (e.g., show an error message)
        alert('Error posting boat:');
      
      })
  }
      
    


  // onSubmit() {
  //   this.router.navigateByUrl("/admin/dashboard");
  //   const boatData = this.boatForm.value; // Get the form data
  //   this.adminservice.postBoat(boatData).subscribe(
  //     (response) => {
  //       // Handle success (e.g., show a success message)
  //       console.log('Boat posted successfully:', response);
  //     },
  //     (error) => {
  //       // Handle error (e.g., show an error message)
  //       console.error('Error posting boat:', error);
  //     })
  
}

