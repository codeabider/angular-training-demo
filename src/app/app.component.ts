import { Component } from '@angular/core';
import { IDService } from './id.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [IDService]
})
export class AppComponent {
  title = 'angular-training-demo';
}
