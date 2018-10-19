import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
  services: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: '2017', name: '98,534.1', weight: '201,543.9', symbol: '165.7', services: '12,209.5'},
  {position: '2016', name: '125,364.1', weight: '321,838.5', symbol: '154.3', services: '32,363.4'},
  {position: '2015', name: '92,752', weight: '331,844', symbol: '110.4', services: '5,341.8'},
  {position: '2014', name: '105,212.3', weight: '257,118.2', symbol: '97.9', services: '0'},
  {position: '2013', name: '40,229.9', weight: '253,958.9', symbol: '90.9', services: '0'},
  {position: '2012', name: '41,990.6', weight: '0', symbol: '0', services: '0'},
];

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class ServiciosComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'services'];
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
      {data: [41990.6, 40229.9, 105212.3, 92752, 125364.1, 98534.1], label: 'Transporte'},
      {data: [0, 253958.9, 257118.2, 331844, 321838.5, 201543.9], label: 'Vivienda y servicios a la comunidad'},
      {data: [0, 90.9, 97.9, 110.4, 154.3, 165.7], label: 'Minería, manufacturas y construcción'},
      {data: [0, 0, 0, 5341.8, 32363.4, 12209.5], label: 'Otros servicios generales'}
    ];
   
    // events
    public chartClicked2(e:any):void {
      console.log(e);
    }
   
    public chartHovered2(e:any):void {
      console.log(e);
    }
}
