import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuboPorMarcaComponent } from './cubo-por-marca-component';

describe('CuboPorMarcaComponent', () => {
  let component: CuboPorMarcaComponent;
  let fixture: ComponentFixture<CuboPorMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuboPorMarcaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CuboPorMarcaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
