import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeciesRoutingModule } from './species-routing.module';
import { SpeciesComponent } from './species.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SpeciesComponent],
  imports: [CommonModule, SpeciesRoutingModule, SharedModule],
})
export class SpeciesModule {}
