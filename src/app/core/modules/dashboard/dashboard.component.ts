import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICard } from 'src/app/shared/typings/card';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}
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
  cardList: ICard[] = [
    {
      imageBgColor: { r: 3, g: 212, b: 182, a: 0.2 },
      imageUrl: '/assets/images/video-camera.svg',
      numberCount: 200,
      tagline: 'More than yesterday',
      title: 'Films',
    },
    {
      imageBgColor: { r: 32, g: 112, b: 255, a: 0.2 },
      imageUrl: '/assets/images/ufo.svg',
      numberCount: 200,
      tagline: 'More than yesterday',
      title: 'Starships',
    },
    {
      imageBgColor: { r: 99, g: 90, b: 208, a: 0.2 },
      imageUrl: '/assets/images/group-of-students.svg',
      numberCount: 200,
      tagline: 'More than yesterday',
      title: 'People',
    },
    {
      imageBgColor: { r: 240, g: 217, b: 60, a: 0.2 },
      imageUrl: '/assets/images/taxi.svg',
      numberCount: 200,
      tagline: 'More than yesterday',
      title: 'Vehicles',
    },
    {
      imageBgColor: { r: 99, g: 90, b: 208, a: 0.2 },
      imageUrl: '/assets/images/phylogenetics.svg',
      numberCount: 200,
      tagline: 'More than yesterday',
      title: 'Species',
    },
  ];
  ngOnInit(): void {}

  updateChanges(category: 'year' | 'week', data: { item: string }) {
    category === 'year'
      ? (this.selectedYear = data.item)
      : (this.selectedWeek = data.item);
  }
  handleCardClick(card: ICard) {
    // Navigate to the the card clicked
    this.router.navigate([card.title.toLowerCase()]);
  }
}
