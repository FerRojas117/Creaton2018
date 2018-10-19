import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: '2017', symbol: '548,802.7'},
  {name: '2016', symbol: '518,329.3'},
  {name: '2015', symbol: '499,419.8'},
  {name: '2014', symbol: '472,970.8'},
  {name: '2013', symbol: '448,806.0'},
  {name: '2012', symbol: '103,429.5'},
];

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class SaludComponent {

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
      {data: [103429.5, 448806.0, 472970.8, 499419.8, 518329.3, 548802.7], label: 'Salud'}
    ];
   
    // events
    public chartClicked2(e:any):void {
      console.log(e);
    }
   
    public chartHovered2(e:any):void {
      console.log(e);
    }
}
