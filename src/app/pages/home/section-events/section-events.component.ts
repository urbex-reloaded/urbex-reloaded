import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-events',
  templateUrl: './section-events.component.html',
  styleUrls: ['./section-events.component.scss']
})
export class SectionEventsComponent implements OnInit {
  date = Date;
  events = [
    {
      endDate: new Date('12/1/2019 12:00:00').getTime(),
      title: 'Commander shelter of civil defense Trencin',
      description: `GPS: 48.89452,18.04436
      Meeting at the station
      fully equipped and not destroyed
      maximum of 10 people with valid code`
    },
    {
      endDate: new Date('12/3/2019 12:34:56').getTime(),
      title: 'Army hospital Bratislava',
      // tslint:disable-next-line:max-line-length
      description: `GPS: 48.1689,17.0736
      meeting at Patronka
      half destroyed protected by SBS - only for the brave ones
      maximum of 6 people with valid code`
    },
    {
      endDate: new Date('12/5/2019 18:36:00').getTime(),
      title: 'Hotel located on Koliba',
      // tslint:disable-next-line:max-line-length
      description: `GPS: 48.1711314,17.1031065
      meeting near the ending of 203 trollybus
      fully destroyed but still interesting it has nice view from the roof
      maximum of 6 people with valid code`
    },
    {
      endDate: new Date('12/6/2019 14:57:00').getTime(),
      title: 'Abandoned mansion on Straze',
      // tslint:disable-next-line:max-line-length
      description: `GPS: 48.1631,17.109
      meeting near the main train station
      half constructed beautiful but painted with sprays
      maximum of 10 people with valid code`
    },
    {
      endDate: new Date('12/8/2019 9:11:00').getTime(),
      title: 'Abandoned railway school located Na Pantoch',
      // tslint:disable-next-line:max-line-length
      description: `GPS: 48.220988,17.1638222
      meeting on the actual place
      destroyed but beautiful sometimes protected by police
      maximum of 10 people with valid code`
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  getRemaining(endTime, unit) {
    switch(unit) {
      case 'days':
        return new Date(endTime - new Date().getTime()).getMonth() * 30 + new Date(endTime - new Date().getTime()).getDate();
      case 'hours':
        return new Date(endTime - new Date().getTime()).getHours();
      case 'mins':
        return new Date(endTime - new Date().getTime()).getMinutes();
    }
  }

}
