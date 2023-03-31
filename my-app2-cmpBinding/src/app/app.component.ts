import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Input Output';

  nomeServer: string = "Server Test";
  numConn: number = 10;

  nomeServer2: string = "Server Build";
  numConn2: number = 25;


}
