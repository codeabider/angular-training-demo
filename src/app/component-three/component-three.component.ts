import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IDService } from '../id.service';

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.scss']
})
export class ComponentThreeComponent implements OnInit, OnDestroy {
  userID: number = 0;
  sub = new Subscription();

  constructor(private idServiceInstance: IDService) {}

  ngOnInit(): void {
    this.sub = this.idServiceInstance.getIDSubject().subscribe(id => {
      this.getUserID(id);
    });
  }

  getUserID(id: number): void {
    this.userID = id;
  }

  onUserIDUpdate(id: number): void {
    this.userID = id;
    this.idServiceInstance.setID(id);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
