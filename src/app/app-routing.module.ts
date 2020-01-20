import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './_components/register/register.component';
import { LoginComponent } from './_components/login/login.component';
import { AdminComponent } from './_components/admin/admin.component';
import { ExpertComponent } from './_components/expert/expert.component';
import { ChercheurComponent } from './_components/chercheur/chercheur.component';
import { AuthGuard } from './_guards';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent, //canActivate: [AuthGuard] 
},
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'expert', component: ExpertComponent },
  { path: 'chercheur', component: ChercheurComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
