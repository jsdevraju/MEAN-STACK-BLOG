import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-project';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.userState = JSON.parse(localStorage.getItem('user') as any);
  }
}
