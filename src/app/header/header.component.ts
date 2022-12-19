import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  userID: number = 0;

  submitUserID(): void {
    console.log(this.userID); // TODO: set in service & log from another service
  }
}
