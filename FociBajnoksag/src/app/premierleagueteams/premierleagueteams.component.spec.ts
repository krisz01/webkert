import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierleagueteamsComponent } from './premierleagueteams.component';

describe('PremierleagueteamsComponent', () => {
  let component: PremierleagueteamsComponent;
  let fixture: ComponentFixture<PremierleagueteamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremierleagueteamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremierleagueteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
