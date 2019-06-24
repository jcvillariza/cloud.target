import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { RouteAuthService as AuthGuard } from '../services/auth/route-auth.service';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivateChild: [AuthGuard],
    children: [
      //todo: Routes to content modules here
      { path: 'login', loadChildren: '../login/login.module#LoginModule' },
      { path: 'home', loadChildren: '../home/home.module#HomeModule' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
