import { Component, OnInit } from '@angular/core';
import { ChartData  } from 'chart.js';

@Component({
  selector: 'app-grafical',
  templateUrl: './grafical.component.html',
  styleUrls: ['./grafical.component.css'],
})
export class GraficalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
 public labels1:string[] = [
  'Download Sales',
  'In-Store Sales',
  'Mail-Order Sales',
];
 
}
