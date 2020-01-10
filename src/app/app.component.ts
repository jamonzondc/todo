import { Component, AfterViewInit } from '@angular/core';
import Plyr from 'plyr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {


  ngAfterViewInit(): void {
    const player = new Plyr('#player', {});
  }
  title = 'todo';


}
