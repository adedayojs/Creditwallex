import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipRoutingModule } from './starship-routing.module';
import { StarshipComponent } from './starship.component';


@NgModule({
  declarations: [StarshipComponent],
  imports: [
    CommonModule,
    StarshipRoutingModule
  ]
})
export class StarshipModule { }
