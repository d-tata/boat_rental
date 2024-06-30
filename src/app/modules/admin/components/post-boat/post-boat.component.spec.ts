import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBoatComponent } from './post-boat.component';

describe('PostBoatComponent', () => {
  let component: PostBoatComponent;
  let fixture: ComponentFixture<PostBoatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostBoatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostBoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
