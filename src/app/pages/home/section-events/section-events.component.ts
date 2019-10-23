import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-events',
  templateUrl: './section-events.component.html',
  styleUrls: ['./section-events.component.scss']
})
export class SectionEventsComponent implements OnInit {

  events = [
    {
      endDate: new Date("11/11/2019 6:00:00").getTime(),
      location: "Some place idk"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
