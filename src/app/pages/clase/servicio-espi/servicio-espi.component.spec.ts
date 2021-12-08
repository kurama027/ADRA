import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioEspiComponent } from './servicio-espi.component';

describe('ServicioEspiComponent', () => {
  let component: ServicioEspiComponent;
  let fixture: ComponentFixture<ServicioEspiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioEspiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioEspiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
