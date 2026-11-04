import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { CuboPorMarcaComponent } from './components/cubo-por-marca-component/cubo-por-marca-component';
import { FavoritoComponent } from './components/favorito-component/favorito-component';
import { LoginComponent } from './components/login-component/login-component';
import { RegisterComponent } from './components/register-component/register-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { authGuard } from './guards/auth-guard';
import { MisComprasComponent } from './components/mis-compras-component/mis-compras-component';
import { RealizarComprasComponent } from './components/realizar-compras-component/realizar-compras-component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cubo/:marca', component: CuboPorMarcaComponent },
  { path: 'favorito', component: FavoritoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [authGuard] },
  { path: 'compras', component: MisComprasComponent, canActivate: [authGuard] },
  { path: 'realizar-compra', component: RealizarComprasComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
