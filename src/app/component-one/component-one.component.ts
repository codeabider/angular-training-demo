import { Component, OnInit } from '@angular/core';
import { IDService } from '../id.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent implements OnInit {
  userID: number = 0;

  constructor(private idServiceInstance: IDService) {}

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
