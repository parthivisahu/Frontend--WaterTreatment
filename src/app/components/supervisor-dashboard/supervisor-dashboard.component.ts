import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service'; // Your authentication service
import { PlantService } from 'src/app/services/plant/plant.service'; // Plant service for onboarding plants
import { PendingFlowComponent } from '../pending-flow/pending-flow.component';

@Component({
  selector: 'app-supervisor-dashboard',
  templateUrl: './supervisor-dashboard.component.html',
  styleUrls: ['./supervisor-dashboard.component.scss']
})
export class SupervisorDashboardComponent implements OnInit {
  pendingFlows: any[] = [];
  onboardedPlants: any[] = [];

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
