import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BackendService } from 'src/app/services/backend.service';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { NavbarComponent } from 'src/app/helpers/navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatToolbarModule, MatIconModule,MatMenuModule, MatDividerModule, MatButtonModule, CommonModule,  MatGridListModule, NavbarComponent, RouterModule]
})
export class LandingPageComponent {
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

 

  deleteWaterPlant(_id: string) {
    if(confirm("Are you sure you want to delete this water treatment plant?")) {
      this.backendService.deleteWaterPlant(_id).subscribe(() => {
        console.log('Plant deleted');
        this.fetchWaterPlants();
      });
    }
  }
}
