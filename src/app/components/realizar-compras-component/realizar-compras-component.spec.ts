import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RealizarComprasComponent } from './realizar-compras-component';

describe('RealizarComprasComponent', () => {
  let component: RealizarComprasComponent;
  let fixture: ComponentFixture<RealizarComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RealizarComprasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RealizarComprasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
