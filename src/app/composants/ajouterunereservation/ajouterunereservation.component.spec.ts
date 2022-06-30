import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterunereservationComponent } from './ajouterunereservation.component';

describe('AjouterunereservationComponent', () => {
  let component: AjouterunereservationComponent;
  let fixture: ComponentFixture<AjouterunereservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterunereservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterunereservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
