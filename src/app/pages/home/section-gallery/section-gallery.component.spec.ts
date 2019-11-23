import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGalleryComponent } from './section-gallery.component';

describe('SectionGalleryComponent', () => {
  let component: SectionGalleryComponent;
  let fixture: ComponentFixture<SectionGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
