import { Component, OnInit } from '@angular/core';
import { TreatmentProcess } from 'src/app/services/interfaces/role';
import { TimerService } from 'src/app/services/timer/timer.service';


@Component({
  selector: 'app-treatment-stats',
  templateUrl: './treatment-stats.component.html',
  styleUrls: ['./treatment-stats.component.scss']
})
export class TreatmentStatsComponent implements OnInit {
  treatmentProcesses : TreatmentProcess[] =[

  ];

  constructor(private timerService: TimerService){}
  
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
