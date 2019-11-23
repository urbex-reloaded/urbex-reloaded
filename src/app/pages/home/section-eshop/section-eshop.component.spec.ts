import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEshopComponent } from './section-eshop.component';

describe('SectionEshopComponent', () => {
  let component: SectionEshopComponent;
  let fixture: ComponentFixture<SectionEshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionEshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionEshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
