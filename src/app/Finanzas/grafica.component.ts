import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 2017, name: '99,806.8', symbol: '243,618.5'},
  {position: 2016, name: '800', symbol: '117,029.7'},
  {position: 2015, name: '0', symbol: '60,015.1'},
  {position: 2014, name: '0', symbol: '101,692.3'},
  {position: 2013, name: '0', symbol: '67,578.7'},
  {position: 2012, name: '18,487.9', symbol: '41,983.7'},
];
@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class FinanzasComponent {

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
      {data: [18487.9, 20454, 40382, 60432, 75645, 99806.8], label: 'Otras industrias y otros asuntos económicos'},
      {data: [41983.7, 67578.7, 101692.3, 60015.1, 117029.7, 243618.5], label: 'Asuntos financieros y hacendarios'}
    ];
   
    // events
    public chartClicked2(e:any):void {
      console.log(e);
    }
   
    public chartHovered2(e:any):void {
      console.log(e);
    }
}