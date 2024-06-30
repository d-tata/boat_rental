import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent {

  boats: any = [];
  

  constructor(private customerService: CustomerService , private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.getAllBoats()
  }

  getAllBoats() {
    this.customerService.getAllboats().subscribe
    ((res) => {
      console.log(res);
      res.forEach((element: { proccessedImg: string; returnedImage: string; }) => {
        element.proccessedImg = 'data:image/jpeg;base64,' + element.returnedImage;
        this.boats.push(element)
      });
    })
  }

}
