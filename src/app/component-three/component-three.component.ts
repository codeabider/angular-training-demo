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
  isLoading;
  hasError = false;
  userData;

  constructor(
    private idServiceInstance: IDService,
    private dataService: DataService) {
      this.userData = this.dataService.getUsers();
      this.isLoading = this.dataService.isLoading;
    }

  ngOnInit(): void {
    this.subs.add(
      this.idServiceInstance.getIDSubject().subscribe(id => {
        this.getUserID(id);
      })
    );

    this.subs.add(
      this.userData.subscribe({
        next: users => {
          console.log({ users });
          this.users = users;
        },
        error: () => {
          this.hasError = true;
        }
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
