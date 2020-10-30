import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.css']
})
export class CalendarCardComponent implements OnInit {
  now: Date = new Date();
  constructor() {
    setTimeout(() => {
      this.now = new Date();
    }, 10000);
   }

  ngOnInit(): void {
  }

}
