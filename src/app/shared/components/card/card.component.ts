import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICard } from '../../typings/card';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() cardDetail: ICard;
  @Output() selected: EventEmitter<ICard> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  get rgba(): string {
    const col = this.cardDetail.imageBgColor;
    return `rgba(${col.r},${col.g},${col.b},${col.a})`;
  }
}
