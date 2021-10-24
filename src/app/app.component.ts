import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myproject';
  url="https://contenterra.com/"
  showHeight: Boolean = false;
  // onclick(eve: Boolean) {
  //   this.showHeight = eve
  // }
}
