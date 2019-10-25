import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-events',
  templateUrl: './section-events.component.html',
  styleUrls: ['./section-events.component.scss']
})
export class SectionEventsComponent implements OnInit {

  events = [
    {
      endDate: new Date('11/11/2019 6:00:00').getTime(),
      title: 'Some place idk',
      description: 'Some event description idk lorem ipsum idk lulw'
    },
    {
      endDate: new Date('11/11/2019 6:00:00').getTime(),
      title: 'Some place idk',
      // tslint:disable-next-line:max-line-length
      description: 'Some event description idk lorem ipsum idk lulw jshdjkshjdkshkdskajdhskahdkjsahdkjkjdsdsahkdhakjdhsjkhdkjsadkjshkjdsakjdhsakjhdsjhdkjsahdkjsahkjdsahkjdshkjdsk'
    },
    {
      endDate: new Date('11/11/2019 6:00:00').getTime(),
      title: 'Dunno name',
      // tslint:disable-next-line:max-line-length
      description: '> As for science, it may be negative.\nHowever, do not forget the thing that there is a scientific side in all the one.\nThe important one is true.\nOf me the ruler my fate, and me also the commander of my soul.'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
