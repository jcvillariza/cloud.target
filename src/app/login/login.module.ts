import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { 
  MatToolbarModule, MatCardModule, 
  MatFormFieldModule, MatInputModule, 
  MatButtonModule
 } from '@angular/material';
import { LoginRoutingModule } from './login-routing.module';

const matModules = [
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    FormsModule,
    CommonModule,
    LoginRoutingModule,
    matModules
  ]
})
export class LoginModule { }
