import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 2017, name: '51,617.9', symbol: '8,182'},
  {position: 2016, name: '54,228', symbol: '20,097.7'},
  {position: 2015, name: '54,648', symbol: '27,252.2'},
  {position: 2014, name: '50,060.3', symbol: '105,212.3'},
  {position: 2013, name: '41,860.2', symbol: '40,229.9'},
  {position: 2012, name: '18,012.4', symbol: '41,990.6'},
];


@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class ComTecComponent {
  displayedColumns: string[] = ['position', 'name', 'symbol'];
  dataSource = ELEMENT_DATA;

    /*--------------------------------------------------------------*/
    public barChartOptions:any = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    public barChartLabels:string[] = ['2012', '2013', '2014', '2015', '2016', '2017'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;
   
    public barChartData:any[] = [
      {data: [18012.4, 41860.2, 50060.3, 54648, 54228, 51617.9], label: 'Ciencia, tecnología e innovación'},
      {data: [41990.6, 40229.9, 105212.3, 27252.2, 20097.7, 8182], label: 'Comunicaciones'}
    ];
   
    // events
    public chartClicked2(e:any):void {
      console.log(e);
    }
   
    public chartHovered2(e:any):void {
      console.log(e);
    }
}
