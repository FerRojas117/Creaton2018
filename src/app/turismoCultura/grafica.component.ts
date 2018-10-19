import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 2017, name: '8,011.4', weight: '19,958.2', symbol: '13,032.8'},
  {position: 2016, name: '10,114.1', weight: '23,358.9', symbol: '13,470.7'},
  {position: 2015, name: '11,460.6', weight:  '27,975.8', symbol: '10,800.1'},
  {position: 2014, name: '8,785.3', weight:'26,816.1', symbol: '9,245.6'},
  {position: 2013, name: '6,713.3', weight: '25,523.8', symbol: '8,145.8'},
  {position: 2012, name: '7,060.9', weight: '0', symbol: '9,012.5'},
];


@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})

export class TurismoComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
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
      {data: [7060.9, 6713.3, 8785.3, 11460.6, 10114.1, 8011.4], label: 'Turismo'},
      {data: [0, 25523.8, 26816.1, 27975.8, 23358.9, 19958.2], label: 'Recreación'},
      {data: [9012.5, 8145.8, 9245.6, 10800.1, 13470.7, 13032.8], label: 'Relaciones Exteriores'}
    ];
   
    // events
    public chartClicked2(e:any):void {
      console.log(e);
    }
   
    public chartHovered2(e:any):void {
      console.log(e);
    }
    /*--------------------------------------------------------------*/
   
}
