import {Component} from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent {
  // Doughnut
  public doughnutChartLabels:string[] = ['Presupuesto de población', 'Presupuesto de empleo y negocios', 'Presupuesto de educación', 'Presupuesto de seguridad y justicia', 'Presupuesto de salud', 'Presupuesto de servicios públicos e infraestructura', 'Presupuesto de finanzas', 'Presupuesto de turismo, relaciones exteriores y cultura', 'Presupuesto de comunicación y tecnología'];
  public doughnutChartData:number[] = [1511193662764, 1152993487657, 334925313813, 244988874971, 122557337320, 106645504028, 27076350643, 22315591894, 11377267259];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
