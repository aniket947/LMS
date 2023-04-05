import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { DashBoardComponent } from './features/dashboard/dashboard.component';
import { LibrarianComponent } from './features/librarian/librarian.component';


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  {
    path: "lms", component: HomeComponent, children: [
      { path: "", component: DashBoardComponent },
      { path: "librarian", component: LibrarianComponent }
    
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
