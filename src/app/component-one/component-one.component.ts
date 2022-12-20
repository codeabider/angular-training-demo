import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { IDService } from '../id.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent implements OnInit, OnDestroy {
  userID: number = 0;
  addresses: any = [];
  isLoading;

  subs = new Subscription();

  constructor(
    private idServiceInstance: IDService,
    private dataService: DataService
  ) {
    this.isLoading = this.dataService.isLoading;
  }

  ngOnInit(): void {
    this.subs.add(
      this.idServiceInstance.getIDSubject().subscribe(id => {
        this.getUserID(id);
      })
    );

    this.subs.add(
      this.dataService.getAddresses().subscribe(addresses => {
        console.log({ addresses });
        this.addresses = addresses;
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
