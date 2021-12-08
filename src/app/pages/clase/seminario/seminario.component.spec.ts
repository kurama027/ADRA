import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminarioComponent } from './seminario.component';

describe('SeminarioComponent', () => {
  let component: SeminarioComponent;
  let fixture: ComponentFixture<SeminarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeminarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeminarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
