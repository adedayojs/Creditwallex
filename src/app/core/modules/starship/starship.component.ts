import { Component, OnInit } from '@angular/core';
import { StarshipService } from './starship.service';
@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss'],
})
export class StarshipComponent implements OnInit {
  allShips: Array<any>;
  constructor(private ships: StarshipService) {}

  ngOnInit(): void {
    this.fetchShips();
  }
  fetchShips() {
    this.ships.fetchShips().subscribe((res) => {
      this.allShips = res.results.map((ship) => {
        return {
          name: ship.name,
          model: ship.model,
          class: ship.starship_class,
          cost: ship.cost_in_credits,
          passengers: ship.passengers,
          length: ship.length,
          crew: ship.crew,
        };
      });
      console.log(this.allShips);
    });
  }
}
