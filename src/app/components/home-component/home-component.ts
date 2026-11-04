import { ChangeDetectorRef, Component } from '@angular/core';
import { ServiceCubos } from '../../services/serviceCubos';
import { Cubo } from '../../models/Cubo';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent {
  public arrayCubos!: Array<Cubo>;

  constructor(
    private _service: ServiceCubos,
    private _cdr: ChangeDetectorRef,
  ) {}

  async loadCubos(): Promise<void> {
    this.arrayCubos = await this._service.loadCubos();
    this._cdr.detectChanges();
  }

  async ngOnInit(): Promise<void> {
    await this.loadCubos();
  }
}
