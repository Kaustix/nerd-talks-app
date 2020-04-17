import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkFilterComponent } from './talk-filter.component';

describe('TalkFilterComponent', () => {
  let component: TalkFilterComponent;
  let fixture: ComponentFixture<TalkFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
