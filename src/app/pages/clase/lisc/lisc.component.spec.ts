import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LiscComponent } from './lisc.component';


describe('LiscComponent', () => {
  let component: LiscComponent;
  let fixture: ComponentFixture<LiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
