import { Component, Input, OnInit } from '@angular/core';
import { IRgba } from '../../typings/card';
import { ITableColumn } from '../../typings/table';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() tableHeading: Array<string>;
  @Input() tableDetail: Array<Array<ITableColumn>>;
  constructor() {}

  ngOnInit(): void {}
  colorCalc(rgba: IRgba): string {
    // This function merges together and return the rgba value
    return `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a})`;
  }
}
