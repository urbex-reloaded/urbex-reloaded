import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-section-gallery',
    templateUrl: './section-gallery.component.html',
    styleUrls: ['./section-gallery.component.scss']
})
export class SectionGalleryComponent implements OnInit {

    imageObject: Array<object> = [
        {
            image: 'assets/images/gallery/1.JPG',
            thumbImage: 'assets/images/gallery/1.JPG',
            alt: '1',

        },
        {
            image: 'assets/images/gallery/2.JPG',
            thumbImage: 'assets/images/gallery/2.JPG',
            alt: '2',

        },
        {
            image: 'assets/images/gallery/3.JPG',
            thumbImage: 'assets/images/gallery/3.JPG',
            alt: '3',

        },
        {
            image: 'assets/images/gallery/4.JPG',
            thumbImage: 'assets/images/gallery/4.JPG',
            alt: '4',

        },
        {
            image: 'assets/images/gallery/5.JPG',
            thumbImage: 'assets/images/gallery/5.JPG',
            alt: '5',
        },
        {
            image: 'assets/images/gallery/6.JPG',
            thumbImage: 'assets/images/gallery/6.JPG',
            alt: '6',

        },
        {
            image: 'assets/images/gallery/7.JPG',
            thumbImage: 'assets/images/gallery/7.JPG',
            alt: '7',

        },
        {
            image: 'assets/images/gallery/8.JPG',
            thumbImage: 'assets/images/gallery/8.JPG',
            alt: '8',

        },
        {
            image: 'assets/images/gallery/9.JPG',
            thumbImage: 'assets/images/gallery/9.JPG',
            alt: '9',

        },
        {
            image: 'assets/images/gallery/10.JPG',
            thumbImage: 'assets/images/gallery/10.JPG',
            alt: '10',

        },
        {
            image: 'assets/images/gallery/11.JPG',
            thumbImage: 'assets/images/gallery/11.JPG',
            alt: '11',

        },
        {
            image: 'assets/images/gallery/12.JPG',
            thumbImage: 'assets/images/gallery/12.JPG',
            alt: '12',

        },
        {
            image: 'assets/images/gallery/13.JPG',
            thumbImage: 'assets/images/gallery/13.JPG',
            alt: '13',

        },
        {
            image: 'assets/images/gallery/14.JPG',
            thumbImage: 'assets/images/gallery/14.JPG',
            alt: '14',

        },
        {
            image: 'assets/images/gallery/15.JPG',
            thumbImage: 'assets/images/gallery/15.JPG',
            alt: '15',

        },
        {
            image: 'assets/images/gallery/16.JPG',
            thumbImage: 'assets/images/gallery/16.JPG',
            alt: '16',

        },
        {
            image: 'assets/images/gallery/17.JPG',
            thumbImage: 'assets/images/gallery/17.JPG',
            alt: '17',

        },
        {
            image: 'assets/images/gallery/18.JPG',
            thumbImage: 'assets/images/gallery/18.JPG',
            alt: '18',

        },
        {
            image: 'assets/images/gallery/19.JPG',
            thumbImage: 'assets/images/gallery/19.JPG',
            alt: '19',

        },
        {
            image: 'assets/images/gallery/20.JPG',
            thumbImage: 'assets/images/gallery/20.JPG',
            alt: '20',

        },
        {
            image: 'assets/images/gallery/21.JPG',
            thumbImage: 'assets/images/gallery/21.JPG',
            alt: '21',

        },
        {
            image: 'assets/images/gallery/22.JPG',
            thumbImage: 'assets/images/gallery/22.JPG',
            alt: '22',

        },
        {
            image: 'assets/images/gallery/23.JPG',
            thumbImage: 'assets/images/gallery/23.JPG',
            alt: '23',

        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
