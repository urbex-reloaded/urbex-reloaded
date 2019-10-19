import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-events',
  templateUrl: './section-events.component.html',
  styleUrls: ['./section-events.component.scss']
})
export class SectionEventsComponent implements OnInit {

  events = [
    {
      name: "test event jedna"
    },
    {
      name: "test event dva"
    },
    {
      name: "test event tri"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
