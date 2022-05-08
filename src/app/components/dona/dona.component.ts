import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  constructor() { }

 // Doughnut
 @Input('labels') doughnutChartLabels: string[]=[];
 @Input('data')  datasets:number[]=[];
@Input() title:string='Sin titulo';
doughnutChartType: ChartType = 'doughnut';

 doughnutChartData: ChartData<'doughnut'> = {
  labels: this.doughnutChartLabels,
  datasets: [{ data:  []}],
};




ngOnInit(): void {
  this.doughnutChartData = {
    labels: this.doughnutChartLabels,
    datasets: [{ data:  this.datasets }],
  };
}
// events
public chartClicked({
  event,
  active,
}: {
  event: ChartEvent;
  active: {}[];
}): void {
  console.log(event, active);
}

public chartHovered({
  event,
  active,
}: {
  event: ChartEvent;
  active: {}[];
}): void {
  console.log(event, active);
}

}
