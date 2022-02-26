import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesCompComponent } from './jokes-comp.component';

describe('JokesCompComponent', () => {
  let component: JokesCompComponent;
  let fixture: ComponentFixture<JokesCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokesCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
