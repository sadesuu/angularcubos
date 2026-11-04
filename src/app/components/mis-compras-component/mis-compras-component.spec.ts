import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisComprasComponent } from './mis-compras-component';

describe('MisComprasComponent', () => {
  let component: MisComprasComponent;
  let fixture: ComponentFixture<MisComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MisComprasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MisComprasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
