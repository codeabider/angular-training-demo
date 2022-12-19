import { Component } from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent {
  userID: number = 0;

  getUserID(): void {}

  onUserIDUpdate(id: number): void {
    this.userID = id; // TODO: set in service
  }
}
