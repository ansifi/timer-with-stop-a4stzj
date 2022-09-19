import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';
  timeLeft: number = 60 * 2;
  interval;
  subscribeTimer: any;

  constructor() { }

  oberserableTimer() {
    const source = timer(1000, 2000);
    const abc = source.subscribe(val => {
      console.log(val, '-');
      this.subscribeTimer = this.timeLeft - val;
    });
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60 * 2;
      }
    },1000)
  }

  stopTimer() {
    clearInterval(this.interval);
    this.timeLeft = 0;
  }
}
