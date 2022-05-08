import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ligue1teamsComponent } from './ligue1teams.component';

describe('Ligue1teamsComponent', () => {
  let component: Ligue1teamsComponent;
  let fixture: ComponentFixture<Ligue1teamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ligue1teamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ligue1teamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
