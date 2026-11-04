import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { CuboPorMarcaComponent } from './components/cubo-por-marca-component/cubo-por-marca-component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cubo/:marca', component: CuboPorMarcaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
