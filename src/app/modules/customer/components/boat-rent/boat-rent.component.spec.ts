import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatRentComponent } from './boat-rent.component';

describe('BoatRentComponent', () => {
  let component: BoatRentComponent;
  let fixture: ComponentFixture<BoatRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatRentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
