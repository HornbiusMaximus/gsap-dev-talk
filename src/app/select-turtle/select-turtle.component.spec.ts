import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTurtleComponent } from './select-turtle.component';

describe('SelectTurtleComponent', () => {
  let component: SelectTurtleComponent;
  let fixture: ComponentFixture<SelectTurtleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTurtleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTurtleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
