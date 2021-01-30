import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarshipComponent } from './starship.component';

const routes: Routes = [{ path: '', component: StarshipComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipRoutingModule { }
