import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../auth/services/auth-guard.service';

import { MapPageComponent } from './components/map-page/map-page.component';

const routes: Routes = [
  {
    path: '',
    component: MapPageComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
