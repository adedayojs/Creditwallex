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
import { TableComponent } from './components/table/table.component';
import { PlainTableComponent } from './components/plain-table/plain-table.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DropdownComponent,
    CardComponent,
    TableComponent,
    PlainTableComponent,
    SearchbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
  ],
  exports: [
    FontAwesomeModule,
    ReactiveFormsModule,
    DropdownComponent,
    FormsModule,
    CardComponent,
    TableComponent,
    PlainTableComponent,
    SearchbarComponent,
  ],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIconPacks(fas, far, fab);
  }
}
