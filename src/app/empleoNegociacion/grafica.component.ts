import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: '2017', symbol: '16,640.8'},
  {name: '2016', symbol: '54,228'},
  {name: '2015', symbol: '22,816.3'},
  {name: '2014', symbol: '26,294.3'},
  {name: '2013', symbol: '23,935.5'},
  {name: '2012', symbol: '4,030.7'},
];

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class EmpleoComponent {

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
      {data: [4030.7, 23935.5, 26294.3, 22816.3, 54228, 16640.8], label: 'Asuntos económicos, comerciales y labores en general'}
    ];
   
    // events
    public chartClicked2(e:any):void {
      console.log(e);
    }
   
    public chartHovered2(e:any):void {
      console.log(e);
    }
}
