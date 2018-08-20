import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurtleDetailsComponent } from './turtle-details.component';

describe('TurtleDetailsComponent', () => {
  let component: TurtleDetailsComponent;
  let fixture: ComponentFixture<TurtleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurtleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurtleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
