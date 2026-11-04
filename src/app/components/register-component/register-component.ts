import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceLogin } from '../../services/serviceLogin';
import { Router } from '@angular/router';
import { Register } from '../../models/Register';

@Component({
  selector: 'app-register-component',
  standalone: false,
  styleUrl: './register-component.css',
  templateUrl: './register-component.html',
})
export class RegisterComponent {
  @ViewChild('cajanombre') cajaUser!: ElementRef<HTMLInputElement>;
  @ViewChild('cajaemail') cajaEmail!: ElementRef<HTMLInputElement>;
  @ViewChild('cajapassword') cajaPassword!: ElementRef<HTMLInputElement>;
  constructor(
    private _service: ServiceLogin,
    private _router: Router,
  ) {}

  async registerAsync() {
    const userName = this.cajaUser.nativeElement.value;
    const email = this.cajaEmail.nativeElement.value;
    const password = this.cajaPassword.nativeElement.value;
    const register = new Register(userName, email, password);
    await this._service.registerUserAsyn(register);
    await this._router.navigate(['/login']);
  }
}
