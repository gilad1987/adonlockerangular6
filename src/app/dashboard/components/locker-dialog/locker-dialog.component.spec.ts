import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerDialogComponent } from './locker-dialog.component';

describe('LockerDialogComponent', () => {
  let component: LockerDialogComponent;
  let fixture: ComponentFixture<LockerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
