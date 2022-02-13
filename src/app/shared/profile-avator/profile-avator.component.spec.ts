import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAvatorComponent } from './profile-avator.component';

describe('ProfileAvatorComponent', () => {
  let component: ProfileAvatorComponent;
  let fixture: ComponentFixture<ProfileAvatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAvatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAvatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
