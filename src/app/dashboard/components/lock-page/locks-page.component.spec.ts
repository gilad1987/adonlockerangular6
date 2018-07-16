import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockPageComponent } from './locks-page.component';

describe('LockPageComponent', () => {
  let component: LockPageComponent;
  let fixture: ComponentFixture<LockPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
