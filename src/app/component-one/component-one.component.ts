import { Component } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent {
  userID: number = 0;

  getUserID(): void {}

  onUserIDUpdate(id: number): void {
    this.userID = id; // TODO: set in service
  }
}
