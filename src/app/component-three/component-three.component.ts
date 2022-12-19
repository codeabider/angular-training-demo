import { Component } from '@angular/core';

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.scss']
})
export class ComponentThreeComponent {
  userID: number = 0;

  getUserID(): void {}

  onUserIDUpdate(id: number): void {
    this.userID = id; // TODO: set in service
  }
}
