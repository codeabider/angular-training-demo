import { Component, OnInit } from '@angular/core';
import { IDService } from '../id.service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent implements OnInit {
  userID: number = 0;
  idServiceInstance;

  constructor() {
    this.idServiceInstance = new IDService();
  }

  ngOnInit(): void {
    this.getUserID();
  }

  getUserID(): void {
    this.userID = this.idServiceInstance.getID();
  }

  onUserIDUpdate(id: number): void {
    this.userID = id;
    this.idServiceInstance.setID(id);
  }
}
