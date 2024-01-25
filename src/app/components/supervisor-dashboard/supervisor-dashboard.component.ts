import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
@Component({
  selector: 'app-supervisor-dashboard',
  templateUrl: './supervisor-dashboard.component.html',
  styleUrls: ['./supervisor-dashboard.component.scss']
})
export class SupervisorDashboardComponent implements OnInit {
  waterTreatmentPlantsData!:any[];
  newPlant: any = {};

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.fetchWaterPlants();
  }

  fetchWaterPlants() {
    this.backendService.getWaterPlants().subscribe(data => {
      this.waterTreatmentPlantsData = data;
    });
  }

}
