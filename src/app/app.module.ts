import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatGridListModule,
  MatDividerModule,
  MatTableModule,
  MatSelectModule,
  MatInputModule,
  
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent, EncuestaComponent, ConfirmacionComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ChartsModule } from 'ng2-charts';
import { ComTecComponent } from './comunicacionTecnologia/grafica.component';
import { SaludComponent } from './salud/grafica.component';
import { EducacionComponent } from './educacion/grafica.component';
import { EmpleoComponent } from './empleoNegociacion/grafica.component';
import { PoblacionComponent } from './poblacion/grafica.component';
import { SeguridadComponent } from './seguridadJusticia/grafica.component';
import { ServiciosComponent } from './serviciosPublicos/grafica.component';
import { TurismoComponent } from './turismoCultura/grafica.component';
import { FinanzasComponent } from './Finanzas/grafica.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ComTecComponent,
    SaludComponent,
    EducacionComponent,
    EmpleoComponent,
    PoblacionComponent,
    SeguridadComponent,
    ServiciosComponent,
    TurismoComponent,
    FinanzasComponent,
    EncuestaComponent,
    ConfirmacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule,
    ChartsModule,
    MatDividerModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule
  ],
  entryComponents: [ EncuestaComponent, ConfirmacionComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
