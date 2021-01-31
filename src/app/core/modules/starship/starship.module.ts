import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipRoutingModule } from './starship-routing.module';
import { StarshipComponent } from './starship.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [StarshipComponent],
  imports: [CommonModule, StarshipRoutingModule, SharedModule],
})
export class StarshipModule {}
