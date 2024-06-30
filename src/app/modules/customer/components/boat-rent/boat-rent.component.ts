import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, Route } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-boat-rent',
  templateUrl: './boat-rent.component.html',
  styleUrls: ['./boat-rent.component.css']
})
export class BoatRentComponent {
   
  boatId : number = this.activateRoute.snapshot.params["id"];
  boat:any;
  rentForm!: FormGroup;
  router: any;

  constructor(private service: CustomerService,
    private activateRoute: ActivatedRoute,
  private fb: FormBuilder) {

  }

  ngOnInit() {
    this.rentForm = this.fb.group ({
      startDate: [null, Validators.required],
      endDate: [null, Validators.required]
    })
    this.getBoatById();
  }


  getBoatById() {
    this.service.getboatById(this.boatId).subscribe((res) => {
      console.log(res);
    })
  }

  rentBoat () {
    console.log(this.rentForm.value);
    const formData: FormData = new FormData();
    formData.append('startDate',this.rentForm.get('startDate')?.value);
    formData.append('endDate',this.rentForm.get('endDate')?.value);
    formData.append('customer_id',StorageService.getUserId());
    formData.append('boat_id',this.boatId.toString());
    this.service.rentBoat(formData).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl("/customer/dashboard");
      alert('Rent submited succesfuully');
    },(error) => {
        alert('Error on renting boat');
  })
}
}
