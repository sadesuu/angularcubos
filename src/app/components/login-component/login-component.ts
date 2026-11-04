import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceLogin } from '../../services/serviceLogin';
import { Login } from '../../models/Login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  @ViewChild('cajauser') cajaUser!: ElementRef<HTMLInputElement>;
  @ViewChild('cajapassword') cajaPassword!: ElementRef<HTMLInputElement>;
  public mensaje!: string;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceLogin,
    private _router: Router,
  ) {}

  async logInAsync(): Promise<void> {
    let userName = this.cajaUser.nativeElement.value;
    let password = this.cajaPassword.nativeElement.value;
    let login = new Login(userName, password);
    const response = await this._service.logInUserAsync(login);
    sessionStorage.setItem('TOKEN', response.response);
    await this._router.navigate(['/']);
    window.location.reload();
  }
}
