import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GraficaComponent } from './graficas/grafica.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'openchart', component: GraficaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
