import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-boat',
  templateUrl: './update-boat.component.html',
  styleUrls: ['./update-boat.component.css']
})
export class UpdateBoatComponent {


  boatId:number=this.activatedRoute.snapshot.params["id"];
  existingImage: string | null = null;
  updateBoatForm !: FormGroup;
  imgChanged: boolean = false;
  selectedFile: any;
  ImagePreview : string|ArrayBuffer| null = null;

  constructor( private adminService:AdminService ,
    private activatedRoute: ActivatedRoute,
    private fb:FormBuilder, private router: Router) {}
  
    ngOnInit() {
      this.updateBoatForm = new FormGroup({
        image: new FormControl ( null, Validators.required),
      brand: new FormControl (null, Validators.required),
      model: new FormControl ( null, Validators.required),
      year: new FormControl (null, Validators.required),
      capacity: new FormControl (null, Validators.required),
      price: new FormControl (null, Validators.required),
      availability: new FormControl (true)
      })
    }

    getBoatbyId() {
      this.adminService.getBoatByid(this.boatId).subscribe((res) => {
        console.log(res);
        const boatDto=res;
        this.existingImage = res.returnedImage;
        console.log(boatDto);
        console.log(this.existingImage);
        this.updateBoatForm.patchValue(boatDto);
      })
    }   

    updateBoat() {
      const formData: FormData = new FormData();
      if (this.imgChanged && this.selectedFile) {
      formData.append('image', this.selectedFile);
      }
      formData.append('brand', this.updateBoatForm.get('brand')?.value );
      formData.append('model', this.updateBoatForm.get('model')?.value);
      formData.append('year', this.updateBoatForm.get('year')?.value);
      formData.append('capacity', this.updateBoatForm.get('capacity')?.value);
      formData.append('price', this.updateBoatForm.get('price')?.value);
      formData.append('availability', this.updateBoatForm.get('availability')?.value);
      console.log(formData);
      this.router.navigateByUrl("/admin/dashboard");
      this.adminService.updateBoat(this.boatId, formData).subscribe((res)=>{
      alert('Boat updated successfully:');
    }, error => {
      alert('Error updating boat:');
    });
  }
  
}


