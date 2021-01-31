/* Angular Core */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Packages */
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

/* Components */
import { DropdownComponent } from './components/dropdown/dropdown.component';

/* Modules */
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [DropdownComponent, CardComponent],
  imports: [CommonModule, FontAwesomeModule, BsDropdownModule.forRoot()],
  exports: [FontAwesomeModule, DropdownComponent, CardComponent],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIconPacks(fas, far, fab);
  }
}
