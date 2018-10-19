import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  coordinacion: string;
  legislacion: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 2017, name: '108,338.9', weight: '99,975.2', symbol: '46,828.1', coordinacion: '31,240.4', legislacion: '14,838.4'},
  {position: 2016, name: '112,671.2', weight: '98,877.8', symbol: '49,082.8', coordinacion: '32,363.4', legislacion: '14,393.6'},
  {position: 2015, name: '42,523.4', weight: '101,027.5', symbol: '51,309.7', coordinacion: '15,931.8', legislacion: '0'},
  {position: 2014, name: '89,150.7', weight: '93,825.3', symbol: '48,065', coordinacion: '26,613.2', legislacion: '13,277.7'},
  {position: 2013, name: '75,924.5', weight: '80,581.1', symbol: '44,688.9', coordinacion: '23,779.9', legislacion: '12,466'},
  {position: 2012, name: '0', weight: '42,547.3', symbol: '0', coordinacion: '0', legislacion: '118.1'},
];


@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class SeguridadComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'coordinacion', 'legislacion'];
  dataSource = ELEMENT_DATA;
    // Doughnut
    public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public doughnutChartData:number[] = [350, 450, 100];
    public doughnutChartType:string = 'doughnut';
   
    // events
    public chartClicked(e:any):void {
      console.log(e);
    }
   
    public chartHovered(e:any):void {
      console.log(e);
    }
    /*--------------------------------------------------------------*/
    public barChartOptions:any = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    public barChartLabels:string[] = ['2012', '2013', '2014', '2015', '2016', '2017'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;
   
    public barChartData:any[] = [
      {data: [0, 75924.5, 89150.7, 42523.4, 112671.2, 108338.9], label: 'Justicia'},
      {data: [42547.3, 80581.1, 93825.3, 101027.5, 98877.8, 99975.2], label: 'Seguridad Nacional'},
      {data: [0, 44688.9, 48065, 51309.7, 49082.8, 46828.1], label: 'Asuntos de orden público y seguridad interior'},
      {data: [0, 23779.9, 26613.2, 15931.8, 32363.4, 31240.4], label: 'Coordinación de la política de gobierno'},
      {data: [118.1, 12466, 13277.7, 0, 14393.6, 14838.4], label: 'Legislación'}
    ];
   
    // events
    public chartClicked2(e:any):void {
      console.log(e);
    }
   
    public chartHovered2(e:any):void {
      console.log(e);
    }
}
