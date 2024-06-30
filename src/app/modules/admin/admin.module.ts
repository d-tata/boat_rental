import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PostBoatComponent } from './components/post-boat/post-boat.component';
import { UpdateBoatComponent } from './components/update-boat/update-boat.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GetRentsComponent } from './components/get-rents/get-rents.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    PostBoatComponent,
    UpdateBoatComponent,
    GetRentsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
