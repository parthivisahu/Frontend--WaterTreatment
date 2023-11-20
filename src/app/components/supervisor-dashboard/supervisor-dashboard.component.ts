import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service'; // Your authentication service
import { PlantService } from 'src/app/services/plant/plant.service'; // Plant service for onboarding plants
import { PendingFlowComponent } from '../pending-flow/pending-flow.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommonModule } from '@angular/common';
import { SupervisorInterface, UserInterface } from 'src/app/services/interfaces/role';

@Component({
  selector: 'app-supervisor-dashboard',
  templateUrl: './supervisor-dashboard.component.html',
  styleUrls: ['./supervisor-dashboard.component.scss']
})
export class SupervisorDashboardComponent implements OnInit {
  pendingFlows: any[] = [];
  onboardedPlants: any[] = [];
  user!:UserInterface;
  supervisor!:SupervisorInterface

  constructor(private authService: AuthService, private plantService: PlantService) { }

  ngOnInit(): void {
    // Fetch pending flows and onboarded plants for the supervisor
    this.fetchPendingFlows();
    this.fetchOnboardedPlants();
  }

  fetchPendingFlows() {
    // Fetch pending flows logic
    // Example: this.plantService.getPendingFlows().subscribe((flows) => this.pendingFlows = flows);
  }

  fetchOnboardedPlants() {
    // Fetch onboarded plants logic
    // Example: this.plantService.getOnboardedPlants().subscribe((plants) => this.onboardedPlants = plants);
  }

  // Other methods for generating reports, onboarding plants, etc.
}
