import { Component } from '@angular/core';
import { IDService } from '../id.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [IDService]
})
export class HeaderComponent {
  userID: number = 0;

  constructor(private idServiceInstance: IDService) {}

  submitUserID(): void {
    console.log(this.userID);
    this.idServiceInstance.setID(this.userID);
  }
}
