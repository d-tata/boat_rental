import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PostBoatComponent } from './components/post-boat/post-boat.component';
import { UpdateBoatComponent } from './components/update-boat/update-boat.component';
import { GetRentsComponent } from './components/get-rents/get-rents.component';


const routes : Routes = [
    {path: "dashboard", component:AdminDashboardComponent },
    {path: "boat", component: PostBoatComponent},
    {path: "boat/:id", component: UpdateBoatComponent},
    {path: "rents", component: GetRentsComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
