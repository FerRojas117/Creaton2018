import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComTecComponent } from './comunicacionTecnologia/grafica.component';
import { SaludComponent } from './salud/grafica.component';
import { EducacionComponent } from './educacion/grafica.component';
import { EmpleoComponent } from './empleoNegociacion/grafica.component';
import { PoblacionComponent } from './poblacion/grafica.component';
import { SeguridadComponent } from './seguridadJusticia/grafica.component';
import { ServiciosComponent } from './serviciosPublicos/grafica.component';
import { TurismoComponent } from './turismoCultura/grafica.component';
import { FinanzasComponent } from './Finanzas/grafica.component';


const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'comTec', component: ComTecComponent },
   { path: 'comSalud', component: SaludComponent },
   { path: 'comEducacion', component: EducacionComponent },
   { path: 'comEmpleo', component: EmpleoComponent },
   { path: 'comPoblacion', component: PoblacionComponent },
   { path: 'comSeguridad', component: SeguridadComponent },
   {path: 'comServicios', component: ServiciosComponent },
   {path: 'comTurismo', component: TurismoComponent },
   {path: 'comFinanzas', component: FinanzasComponent },


   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
