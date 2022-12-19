import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() id: number = 0;
  @Output() userIDEvent = new EventEmitter<number>();

  increment(): void {
    this.userIDEvent.emit(this.id + 1)
  }

  decrement(): void {
    this.userIDEvent.emit(this.id - 1)
  }
}