import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}
  years = [
    { item: 'Current Year' },
    { item: 'Last Year' },
    { item: '2018' },
    { item: '2017' },
  ];
  selectedYear = this.years[0].item;
  weeks = [
    { item: 'Current Week' },
    { item: 'Last Week' },
    { item: '2018' },
    { item: '2017' },
  ];
  selectedWeek = this.weeks[0].item;
  ngOnInit(): void {}

  updateChanges(category: 'year' | 'week', data: { item: string }) {
    console.log();
    category === 'year'
      ? (this.selectedYear = data.item)
      : (this.selectedWeek = data.item);
  }
}
