import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRentsComponent } from './get-rents.component';

describe('GetRentsComponent', () => {
  let component: GetRentsComponent;
  let fixture: ComponentFixture<GetRentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetRentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetRentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
