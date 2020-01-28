import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module'
import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { AlertComponent } from './_components';
import { HttpClientModule } from '@angular/common/http';
import { MainNavComponent } from './_components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ExpertComponent } from './_components/expert/expert.component';
import { ChercheurComponent } from './_components/chercheur/chercheur.component';
import { AdminComponent } from './_components/admin/admin.component';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { ProfileComponent } from './_components/profile/profile.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import {MatInputModule} from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    MainNavComponent,
    ExpertComponent,
    ChercheurComponent,
    AdminComponent,
    ProfileComponent,



    
  
    
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    RouterModule,
    MatInputModule,
    NgMaterialMultilevelMenuModule,
    OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
