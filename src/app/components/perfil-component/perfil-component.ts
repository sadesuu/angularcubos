import { ChangeDetectorRef, Component, Injectable } from '@angular/core';
import { ServiceLogin } from '../../services/serviceLogin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-component',
  standalone: false,
  styleUrl: './perfil-component.css',
  templateUrl: './perfil-component.html',
})
@Injectable()
export class PerfilComponent {
  public perfil: any;
  public error = false;

  constructor(
    private _service: ServiceLogin,
    private _router: Router,
    private _cdr: ChangeDetectorRef
  ) { }

  async ngOnInit(): Promise<void> {
    try {
      this.perfil = await this._service.getPerfilUserAsync();
      this._cdr.detectChanges()
    } catch {
      this.error = true;
    }
  }
}
