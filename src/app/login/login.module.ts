import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';

const matModules = [
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    FormsModule,
    CommonModule,
    matModules
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
