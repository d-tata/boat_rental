import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { BoatRentComponent } from './components/boat-rent/boat-rent.component';

const routes: Routes = [
  {path:"dashboard", component:CustomerDashboardComponent},
  {path:"rent/:id", component:BoatRentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
