import { Component, OnInit } from '@angular/core';
import { TreatmentProcess } from 'src/app/services/interfaces/role';
import { TimerService } from 'src/app/services/timer/timer.service';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";


@Component({
  selector: 'app-treatment-stats',
  templateUrl: './treatment-stats.component.html',
  styleUrls: ['./treatment-stats.component.scss']
})
export class TreatmentStatsComponent implements OnInit {
  treatmentProcesses : TreatmentProcess[] =[

  ];

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'Coagulation'], [ 'Flocculation' ], [ 'Sedimentation'], ['Filtration'], ['Disinfection'] ];
  public pieChartDatasets = [ {
    data: [ 30 , 82, 70, 45,27  ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
  constructor(private timerService: TimerService){}
  
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Plant A', 'Plant B', 'Plant C', 'Bisleri', 'Kinley'
    ],
    datasets: [
      {
        data: [ 90, 42, 45, 34, 56, 88 ],
        label: 'PLants vs Temperature',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: '#79c7f7'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

  ngOnInit(){
    this.startTimers();
  }
  
  startTimers(): void {
    this.treatmentProcesses.forEach(process => {
      this.timerService.startTimer().subscribe(() =>{
        process.elapsedTime++;
      })
    })
  }
}
