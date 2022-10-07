import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPageComponent } from './add-page/add-page.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import {MatButtonModule} from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, CreateUserComponent, UsersListComponent, NavbarComponent, HomeComponent, FooterComponent, LoginComponent, DashboardComponent, AddPageComponent, AboutComponent, ServicesComponent],
  imports: [
  
    BrowserModule,MatButtonModule,NgbPaginationModule,NgbAlertModule,

    
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
