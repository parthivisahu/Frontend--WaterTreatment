import { Component, OnInit } from '@angular/core';
import { WaterTreatmentService } from 'src/app/services/water-treatment.service';

@Component({
  selector: 'app-water-stats',
  templateUrl: './water-stats.component.html',
  styleUrls: ['./water-stats.component.scss']
})
export class WaterStatsComponent implements OnInit{
  coagulation!:any[];
  flocculation!:any[];
  sedimentation!:any[];
  filtration!:any[];
  disinfection!:any[];

  constructor(private waterServices: WaterTreatmentService){}

  ngOnInit(): void {
      this.fetchCoagulation();
      this.fetchFlocculation();
      this.fetchSedimentation();
      this.fetchFiltration();
      this.fetchDisinfection();
  }

  fetchCoagulation(){
    this.waterServices.getCoagulation().subscribe(data =>{
      this.coagulation=data;
    }, error => {
      console.error('Error Fetching Stats', error);
    });
  }

  fetchFlocculation(){
    this.waterServices.getFlocculation().subscribe(data =>{
      this.flocculation=data;
    }, error => {
      console.error('Error Fetching Stats', error);
    });
  }

  fetchSedimentation(){
    this.waterServices.getSedimentation().subscribe(data =>{
    this.sedimentation=data;
    }, error => {
    console.error('Error Fetching Stats', error);
  });
  }

  fetchFiltration(){
    this.waterServices.getFiltration().subscribe(data =>{
      this.filtration=data;
    }, error => {
      console.error('Error Fetching Stats', error);
    });
  }

  fetchDisinfection(){
    this.waterServices.getDisinfection().subscribe(data =>{
      this.disinfection=data;
    }, error => {
      console.error('Error Fetching Stats', error);
    });
  }

}

