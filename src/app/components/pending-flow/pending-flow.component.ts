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
    // Update the status to 'Approved' in the backend through API call
    this.backendService.addPending(flowId).subscribe(() => {
      // Update the status locally after successful approval
      const flowIndex = this.treatmentStatsData.findIndex((flow) => flow.id === flowId);
      if (flowIndex !== -1) {
        this.treatmentStatsData[flowIndex].status = 'Approved';
        this.dataSource.data = [...this.treatmentStatsData];
      }
    });
  }

  rejectFlow(flowId: number) {
    // Update the status to 'Rejected' in the backend through API call
    this.backendService.rejectPending(flowId).subscribe(() => {
      // Update the status locally after successful rejection
      const flowIndex = this.treatmentStatsData.findIndex((flow) => flow.id === flowId);
      if (flowIndex !== -1) {
        this.treatmentStatsData[flowIndex].status = 'Rejected';
        this.dataSource.data = [...this.treatmentStatsData];
      }
    });
  }

  displayedColumns: string[] = ['id', 'details', 'status', 'actions'];

  // Inject MatSort and MatPaginator as ViewChild
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort; // set up the sort
    this.dataSource.paginator = this.paginator; // set up the paginator
  }
}
