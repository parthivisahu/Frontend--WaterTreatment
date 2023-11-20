import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from 'src/app/services/user/user.service';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './helpers/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { PendingFlowComponent } from './components/pending-flow/pending-flow.component';
import { WaterTreatmentPlantsComponent } from './components/water-treatment-plants/water-treatment-plants.component';
import { MatTableModule } from '@angular/material/table'; 
import { MatSortModule } from '@angular/material/sort'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { TimerService } from './services/timer/timer.service';
import { WaterStatsComponent } from './components/water-stats/water-stats.component';
import { FormsModule } from '@angular/forms';
import { ProgressStepComponent } from './progress/progress-step/progress-step.component';
import { ProgressStepDirective } from './progress/progress-step.directive';
import { ProgressComponent } from './progress/progress.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProgressContainerComponent } from './components/progress-container/progress-container.component';
import { MatButtonModule } from '@angular/material/button';
import { TreatmentCompleteDialogComponent } from './components/treatment-complete-dialog/treatment-complete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SupervisorDashboardComponent } from './components/supervisor-dashboard/supervisor-dashboard.component';
import { ApprovalComponent } from './approval/approval.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardActions, MatCardModule, MatCardTitleGroup } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { TreatmentStatsComponent } from './components/treatment-stats/treatment-stats.component';
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        SignupComponent,
        UserDashboardComponent,
        PendingFlowComponent,
        WaterTreatmentPlantsComponent,
        WaterStatsComponent,
        ProgressStepComponent,
        ProgressStepDirective,
        ProgressComponent,
        ProgressContainerComponent,
        TreatmentCompleteDialogComponent,
        SupervisorDashboardComponent,
        ApprovalComponent,
        TreatmentStatsComponent
        
    ],
    providers: [UserService,TimerService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavbarComponent,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NavbarComponent,
        MatTableModule, 
        MatSortModule, 
        MatPaginatorModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDialogModule,
        MatSnackBarModule,
        MatIconModule,
        MatDividerModule,
        MatMenuModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        CommonModule,
        MatGridListModule,
        NavbarComponent,
        
        
        
    ]
})
export class AppModule { }
