import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardPageComponent } from './card/components/card-page/card-page.component';
import { LoginPageComponent } from './login/components/login-page/login-page.component';
import { MapPageComponent } from './map/components/map-page/map-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'card',
    component: CardPageComponent
  },
  {
    path: 'map',
    component: MapPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
