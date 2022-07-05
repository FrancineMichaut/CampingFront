import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandonneesComponent } from './randonnees.component';

describe('RandonneesComponent', () => {
  let component: RandonneesComponent;
  let fixture: ComponentFixture<RandonneesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandonneesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandonneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
