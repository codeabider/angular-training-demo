import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Subject, tap } from 'rxjs';
import { IDService } from '../id.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userID: number = 0;
  customInputSub: Subject<number> = new Subject();

  constructor(private idServiceInstance: IDService) {}

  ngOnInit(): void {
    this.idServiceInstance
    .getIDSubject()
    .subscribe(id => this.userID = id);

    this.customInputSub.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      tap(id => console.log('tapping into stream...', id)),
      map(id => id * 2)
    )
    .subscribe(inputVal => {
      this.idServiceInstance.setID(inputVal);
    })
  }

  setUserID(): void {
    console.log(this.userID);
    this.customInputSub.next(this.userID)
  }
}
