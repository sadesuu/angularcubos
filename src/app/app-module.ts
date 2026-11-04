import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login-component';
import { RegisterComponent } from './components/register-component/register-component';
import { CuboPorMarcaComponent } from './components/cubo-por-marca-component/cubo-por-marca-component';
import { FavoritoComponent } from './components/favorito-component/favorito-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { MisComprasComponent } from './components/mis-compras-component/mis-compras-component';
import { RealizarComprasComponent } from './components/realizar-compras-component/realizar-compras-component';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CuboPorMarcaComponent,
    FavoritoComponent,
    PerfilComponent,
    MisComprasComponent,
    RealizarComprasComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
