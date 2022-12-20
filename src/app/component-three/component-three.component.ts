import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { IDService } from '../id.service';

export interface IUser {
  id: number;
  name: string;
}

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.scss']
})
export class ComponentThreeComponent implements OnInit, OnDestroy {
  userID: number = 0;
  subs = new Subscription();
  users: IUser[] = [];

  constructor(
    private idServiceInstance: IDService,
    private dataService: DataService) {}

  ngOnInit(): void {
    this.subs.add(
      this.idServiceInstance.getIDSubject().subscribe(id => {
        this.getUserID(id);
      })
    );
    // TODO: demonstrate using async pipe
    this.subs.add(
      this.dataService.getData('users').subscribe(users => {
        console.log({ users });
        this.users = users;
      })
    )
  }

  getUserID(id: number): void {
    this.userID = id;
  }

  onUserIDUpdate(id: number): void {
    this.userID = id;
    this.idServiceInstance.setID(id);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
