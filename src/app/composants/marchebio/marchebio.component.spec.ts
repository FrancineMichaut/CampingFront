import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchebioComponent } from './marchebio.component';

describe('MarchebioComponent', () => {
  let component: MarchebioComponent;
  let fixture: ComponentFixture<MarchebioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarchebioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarchebioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
