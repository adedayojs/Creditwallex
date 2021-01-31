import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plain-table',
  templateUrl: './plain-table.component.html',
  styleUrls: ['./plain-table.component.scss'],
})
export class PlainTableComponent implements OnInit {
  @Input() tableHeading: Array<string>;
  @Input() tableDetail: Array<Array<string>>;
  constructor() {}

  ngOnInit(): void {}
}
