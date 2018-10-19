import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: '2017', symbol: '708,957.9'},
  {name: '2016', symbol: '702,919.6'},
  {name: '2015', symbol: '672,448.8'},
  {name: '2014', symbol: '630,494.4'},
  {name: '2013', symbol: '583,293.5'},
  {name: '2012', symbol: '261,742.6'},
];
@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class EducacionComponent {

  displayedColumns: string[] = ['name', 'symbol'];
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
      {data: [261742.6, 583293.5, 630494.4, 672448.8, 702919.6, 708957.9], label: 'Educación'}
    ];
   
    // events
    public chartClicked2(e:any):void {
      console.log(e);
    }
   
    public chartHovered2(e:any):void {
      console.log(e);
    }
}
