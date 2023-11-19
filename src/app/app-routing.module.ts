import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { PendingFlowComponent } from './components/pending-flow/pending-flow.component';
import { WaterTreatmentPlantsComponent } from './components/water-treatment-plants/water-treatment-plants.component';
import { TreatmentStatsComponent } from './components/treatment-stats/treatment-stats.component';
import { WaterStatsComponent } from './components/water-stats/water-stats.component';
import { ProgressComponent } from './progress/progress.component';
import { ProgressContainerComponent } from './components/progress-container/progress-container.component';
import { ApprovalComponent } from './approval/approval.component';
import { HomeComponent } from './components/home/home.component';
import { SupervisorDashboardComponent } from './components/supervisor-dashboard/supervisor-dashboard.component';

const routes: Routes = [
  { path: '', 
  redirectTo: '/login',
   pathMatch: 'full' 
  },
  // {
  //   path:'',
  //   component: LandingPageComponent
  // },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'user',
    component:UserDashboardComponent
  },
  {
    path:'pending-flow',
    component:PendingFlowComponent
  },
  {
    path:'plants',
    component:WaterTreatmentPlantsComponent
  },
  {
    path:'stats',
    component:TreatmentStatsComponent
  },
  {
    path:'water-stats',
    component:WaterStatsComponent
  },
  {
    path:'landing',
    component:LandingPageComponent
  },
  {
    path:'progress',
    component:ProgressContainerComponent
  },
  {
    path:'approval',
    component:ApprovalComponent
  },
  {
    path:'supervisor',
    component:SupervisorDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
