import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NerdEventsComponent } from './nerd-events.component';

describe('NerdEventsComponent', () => {
  let component: NerdEventsComponent;
  let fixture: ComponentFixture<NerdEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NerdEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NerdEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
