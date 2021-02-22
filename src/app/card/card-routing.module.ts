import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../auth/services/auth-guard.service';

import { CardPageComponent } from './components/card-page/card-page.component';

const routes: Routes = [
  {
    path: '',
   component: CardPageComponent,
   canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardRoutingModule { }
