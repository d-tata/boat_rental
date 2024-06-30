import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-get-rents',
  templateUrl: './get-rents.component.html',
  styleUrls: ['./get-rents.component.css']
})
export class GetRentsComponent {

  rents: any;

    constructor(private adminservice:AdminService) {
      this.getRents;

    }

    ngOnInit() {

      this.getRents()
    }

    getRents() {
      this.adminservice.getAllrents().subscribe((res) => {
         console.log(res);
         this.rents = res;
      })
    }


    deleteRent(id : number) {
      this.adminservice.deleteRent(id).subscribe((res)=>{
        console.log(res);
        alert("Rent was released");
        window.location.reload();
      })
    }
}

