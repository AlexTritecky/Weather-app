import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifeDayForecastComponent } from './fife-day-forecast.component';

describe('FifeDayForecastComponent', () => {
  let component: FifeDayForecastComponent;
  let fixture: ComponentFixture<FifeDayForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifeDayForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FifeDayForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
