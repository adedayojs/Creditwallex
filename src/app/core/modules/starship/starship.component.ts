import { Component, OnInit } from '@angular/core';
import { StarshipService } from './starship.service';
@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss'],
})
export class StarshipComponent implements OnInit {
  allShips: any;
  filteredShip: Array<any>;
  totalItems: number;
  end: number;
  start: number;
  constructor(private ships: StarshipService) {}

  ngOnInit(): void {
    this.fetchShips();
  }
  fetchShips() {
    this.ships.fetchShips().subscribe((res) => {
      this.allShips = res;
      this.start = !res.previous ? 1 : (this.totalItems = res.count);
      this.end = !res.previous
        ? res.results.length
        : !res.next
        ? res.count
        : ''; // Apply logic
      this.totalItems = res.count;
      /* Since we are passing in an array of array of strings */
      // For each ship
      this.filteredShip = res.results.map((ship) => {
        const arr = [
          'name',
          'model',
          'starship_class',
          'cost_in_credits',
          'passengers',
          'length',
          'crew',
        ];
        // Convert the needed values into an array of strings
        return arr.map((cat) => ship[cat]);
      });
      console.log(this.allShips);
    });
  }
  paginate(type: 'next' | 'prev') {
    this.urlDecoder(this.allShips.next);
    if (type === 'next') {
      //  If there is ship remaining
      if (this.allShips.next) {
        // Fetch ship according to pagination
      }
    }

    if (type === 'prev') {
      //  If there is previous ship remaining
      if (this.allShips.previous) {
        // Fetch ship according to pagination
      }
    }
  }
  urlDecoder(url: string) {
    const myUrl = new URL(url);
    const urlSearchParams = new URLSearchParams(myUrl.search);
    console.log(myUrl, urlSearchParams);
  }
}
