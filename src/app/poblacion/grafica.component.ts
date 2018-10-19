import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 2017, name: '1,341,375.7', symbol: '573.9'},
  {position: 2016, name: '1,238,192.5', symbol: '795.9'},
  {position: 2015, name: '695,126.3', symbol: '1,739.9'},
  {position: 2014, name: '635,099.9', symbol: '0'},
  {position: 2013, name: '558,495.8', symbol: '0'},
  {position: 2012, name: '558,81,563.6.8', symbol: '0'},
];


@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class PoblacionComponent {

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
      {data: [81563.6, 558495.8, 635099.9, 695126.3, 1238192.5, 1341375.7], label: 'Protección social'},
      {data: [435320, 589730, 467508, 605064.9, 623043.9, 805064.9], label: 'Otros asuntos sociales'}
    ];
   
    // events
    public chartClicked2(e:any):void {
      console.log(e);
    }
   
    public chartHovered2(e:any):void {
      console.log(e);
    }
}
