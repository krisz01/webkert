import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaligaTeamsComponent } from './laligateams.component';

describe('LaligaTeamsComponent', () => {
  let component: LaligaTeamsComponent;
  let fixture: ComponentFixture<LaligaTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaligaTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaligaTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
