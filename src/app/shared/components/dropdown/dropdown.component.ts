import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: BsDropdownConfig,
      useValue: { isAnimated: true, autoClose: true },
    },
  ],
})
export class DropdownComponent implements OnInit {
  constructor() {}
  @Input() title: string;
  @Input() list: Array<{ item: string }>;

  @Output() select = new EventEmitter();
  ngOnInit(): void {}
}
