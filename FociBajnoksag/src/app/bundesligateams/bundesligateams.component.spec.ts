import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundesligateamsComponent } from './bundesligateams.component';

describe('BundesligateamsComponent', () => {
  let component: BundesligateamsComponent;
  let fixture: ComponentFixture<BundesligateamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BundesligateamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BundesligateamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
