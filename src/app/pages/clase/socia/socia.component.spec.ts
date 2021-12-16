import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SociaComponent } from './socia.component';

describe('SociaComponent', () => {
  let component: SociaComponent;
  let fixture: ComponentFixture<SociaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SociaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SociaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
