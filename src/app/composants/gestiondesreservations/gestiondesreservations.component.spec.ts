import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiondesreservationsComponent } from './gestiondesreservations.component';

describe('GestiondesreservationsComponent', () => {
  let component: GestiondesreservationsComponent;
  let fixture: ComponentFixture<GestiondesreservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestiondesreservationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestiondesreservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
