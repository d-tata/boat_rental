import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';


export const routes: Routes = [
    // {path: '', redirectTo: './login', pathMatch:'full'},
    { path: "register", component: SignupComponent },
    { path: "login", component: LoginComponent },
    { path: "admin", loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule) },
    { path: "customer", loadChildren: () => import("./modules/customer/customer.module").then(m => m.CustomerModule) }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutes { }
