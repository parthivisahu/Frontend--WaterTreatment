import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pending-flow',
  templateUrl: './pending-flow.component.html',
  styleUrls: ['./pending-flow.component.scss'],
})
export class PendingFlowComponent implements OnInit, AfterViewInit {
  treatmentStatsData: any[] = [];
  dataSource!: MatTableDataSource<any>;

  constructor(private backendService: BackendService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.fetchTreatmentStats();
    this.dataSource = new MatTableDataSource<any>(this.treatmentStatsData);
  }

  fetchTreatmentStats() {
    this.backendService.getPending().subscribe((data) => {
      this.treatmentStatsData = data;
      this.dataSource.data = this.treatmentStatsData;
    });
  }

  approveFlow(flowId: number) {
    this.backendService.approveFlow(flowId).subscribe(() => {
      const flowIndex = this.treatmentStatsData.findIndex((flow) => flow.id === flowId);
      if (flowIndex !== -1) {
        this.treatmentStatsData[flowIndex].status = 'Approved';
        this.dataSource.data = [...this.treatmentStatsData];
  
        this.snackBar.open('Flow Successfully Approved', 'Close', {
          duration: 2000,
        });
      }
    });
  }
  
  rejectFlow(flowId: number) {
    this.backendService.rejectPending(flowId).subscribe(() => {
      const flowIndex = this.treatmentStatsData.findIndex((flow) => flow.id === flowId);
      if (flowIndex !== -1) {
        this.treatmentStatsData[flowIndex].status = 'Rejected';
        this.dataSource.data = [...this.treatmentStatsData];
  
        this.snackBar.open('Flow Successfully Rejected', 'Close', {
          duration: 2000,
        });
      }
    });
  }

  displayedColumns: string[] = ['id', 'details', 'status', 'actions'];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort; 
    this.dataSource.paginator = this.paginator; 
  }
}