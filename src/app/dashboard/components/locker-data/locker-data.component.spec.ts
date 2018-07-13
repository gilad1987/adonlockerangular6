import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerDataComponent } from './locker-data.component';

describe('LockerDataComponent', () => {
  let component: LockerDataComponent;
  let fixture: ComponentFixture<LockerDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockerDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
