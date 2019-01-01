import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonToxicComponent } from './non-toxic.component';

describe('NonToxicComponent', () => {
  let component: NonToxicComponent;
  let fixture: ComponentFixture<NonToxicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonToxicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonToxicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
