import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCalcComponent } from './history-calc.component';

describe('HistoryCalcComponent', () => {
  let component: HistoryCalcComponent;
  let fixture: ComponentFixture<HistoryCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
