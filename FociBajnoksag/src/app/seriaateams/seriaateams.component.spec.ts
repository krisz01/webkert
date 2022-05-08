import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriaateamsComponent } from './seriaateams.component';

describe('SeriaateamsComponent', () => {
  let component: SeriaateamsComponent;
  let fixture: ComponentFixture<SeriaateamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriaateamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriaateamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
