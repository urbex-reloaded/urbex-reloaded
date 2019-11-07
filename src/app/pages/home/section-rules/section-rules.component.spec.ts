import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionRulesComponent } from './section-rules.component';

describe('SectionRulesComponent', () => {
  let component: SectionRulesComponent;
  let fixture: ComponentFixture<SectionRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
