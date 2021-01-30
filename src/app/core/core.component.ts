import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
navItems = [
  {name:'Dashboard', url:'/assets/Dashboard/dashboard.svg', link:'dashboard'},
  {name:'Starships', url:'/assets/Dashboard/building.svg', link:'starships'},
  {name:'People', url:'/assets/Dashboard/shopping-basket (1).svg', link:'people'},
  {name:'Vehicles', url:'/assets/Dashboard/menu.svg', link:'vehicles'},
  {name:'Species', url:'/assets/Dashboard/menu.svg', link:'species'},

]
  constructor() { }

  ngOnInit(): void {
  }

}
