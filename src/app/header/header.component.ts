import { Component } from '@angular/core';
import { IDService } from '../id.service';

// TODO: demonstrate how we can get latest ID values updated by any other component
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userID: number = 0;

  constructor(private idServiceInstance: IDService) {}

  ngOnInit() {
    this.idServiceInstance
      .getIDSubject()
      .subscribe(id => this.userID = id);
  }

  submitUserID(): void {
    console.log(this.userID);
    this.idServiceInstance.setID(this.userID);
  }
}
