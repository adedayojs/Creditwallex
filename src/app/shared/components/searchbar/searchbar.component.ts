import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  /* Props */
  @Input() placeholder: string;
  @Input() totalItem: number;
  @Input() start: number;
  @Input() end: number;

  /* Event Emitters */
  @Output() nextPage = new EventEmitter();
  @Output() prevPage = new EventEmitter();
  @Output() input = new EventEmitter();
  constructor(private location: Location) {}

  /* Helper Variables */
  searchInput
  ngOnInit(): void {}

  /* Navigator button */
  goBack() {
    this.location.back();
  }

  /* Pagination handler */
  paginate(action: 'prev' | 'next') {
    action === 'prev' ? this.prevPage.emit(action) : this.nextPage.emit(action);
  }
  /* Search Handler */
  search(){
    console.log(this.searchInput)
    this.input.emit(this.searchInput)
  }
}
