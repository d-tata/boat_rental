import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  boats : any = [];
    
  constructor(private adminService: AdminService) {}

  ngOnInit() {

    this.getAllBoats()
  }

  getAllBoats() {
    this.adminService.getAllboats().subscribe
    ((res) => {
      console.log(res);
      res.forEach((element: { proccessedImg: string; returnedImage: string; }) => {
        element.proccessedImg = 'data:image/jpeg;base64,' + element.returnedImage;
        this.boats.push(element)
      });
    })
  }

  deleteBoat(id: number){
    console.log(id);
    this.adminService.deleteBoat(id).subscribe((res) => {
      window.location.reload();
    alert('Boat deleted successfully:');
    },
    (error) => {
      alert('Error deleting boat:');
    })
  }

}


