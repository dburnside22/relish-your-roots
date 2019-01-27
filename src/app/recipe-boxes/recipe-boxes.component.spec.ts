import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeBoxesComponent } from './recipe-boxes.component';

describe('RecipeBoxesComponent', () => {
  let component: RecipeBoxesComponent;
  let fixture: ComponentFixture<RecipeBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
