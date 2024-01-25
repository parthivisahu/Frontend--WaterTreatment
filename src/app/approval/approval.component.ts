import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service'; // Import your backend service to handle requests

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss']
})
export class ApprovalComponent implements OnInit {
  pendingRequests: any[] = [];

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.getPendingRequests(); 
  }

  getPendingRequests(): void {
    this.backendService.getPendingRequests().subscribe(
      (requests: any[]) => {
        this.pendingRequests = requests; 
      },
      (error: any) => {
        console.error('Error fetching pending requests:', error);
      }
    );
  }

  approveRequest(requestId: string): void {
    this.backendService.approveRequest(requestId).subscribe(
      (response: any) => {
        console.log('Request approved:', response);
        this.getPendingRequests(); 
      },
      (error: any) => {
        console.error('Error approving request:', error);
      }
    );
  }

  rejectRequest(requestId: string): void {
    this.backendService.rejectRequest(requestId).subscribe(
      (response: any) => {
        console.log('Request rejected:', response);
        this.getPendingRequests(); 
      },
      (error: any) => {
        console.error('Error rejecting request:', error);
      }
    );
  }
}
