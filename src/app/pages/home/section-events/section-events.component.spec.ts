import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEventsComponent } from './section-events.component';

describe('SectionEventsComponent', () => {
  let component: SectionEventsComponent;
  let fixture: ComponentFixture<SectionEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
