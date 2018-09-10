import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymFormComponent } from './gym-form.component';

describe('GymFormComponent', () => {
  let component: GymFormComponent;
  let fixture: ComponentFixture<GymFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
