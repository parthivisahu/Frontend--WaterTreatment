import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { PendingFlowComponent } from './components/pending-flow/pending-flow.component';
import { WaterTreatmentPlantsComponent } from './components/water-treatment-plants/water-treatment-plants.component';
import { TreatmentStatsComponent } from './components/treatment-stats/treatment-stats.component';
import { ProgressContainerComponent } from './components/progress-container/progress-container.component';
import { ApprovalComponent } from './approval/approval.component';
import { SupervisorDashboardComponent } from './components/supervisor-dashboard/supervisor-dashboard.component';
import { PlantProfileComponent } from './plant-profile/plant-profile.component';
import { AuthGuard } from './services/auth/auth.guard';
import { LoginMainComponent } from './components/login-main/login-main.component';
import { LoginSupervisorComponent } from './components/login-supervisor/login-supervisor.component';

const routes: Routes = [
  { path: '', 
  redirectTo: '/login',
   pathMatch: 'full' 
  },
  { 
    path: 'login/user', 
    component: LoginComponent }, 
  { 
    path: 'login/supervisor', 
    component: LoginComponent },
  // {
  //   path:'',
  //   component: LandingPageComponent
  // },
  {
    path:'login-supervisor',
    component:LoginSupervisorComponent
  },
  {
    path:'supervisor',
    component:SupervisorDashboardComponent,
  },
  {
    path:'login-main',
    component: LoginMainComponent
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
    path:'plant-profile',
    component:PlantProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
