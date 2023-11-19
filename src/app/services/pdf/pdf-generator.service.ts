import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { BackendService } from '../backend.service';

@Injectable({
  providedIn: 'root',
})
export class PdfGeneratorService {
  constructor(private plantService: BackendService) {}

  generatePdf(): void {
    this.plantService.getWaterPlants().subscribe((plantDetails: any[]) => {
      const pdf = new jsPDF();
      

      const headers = [['Plant Details', 'Data']];
      const bodyData = plantDetails.map((plant) => [
        `Plant Name: ${plant.name}`,
        `Location: ${plant.location}\nTemperature: ${plant.temperature}°C\nGallons: ${plant.gallonsPresent}\nCoagulation: ${plant.coagulationPercentage}%\nFlocculation: ${plant.flocculationPercentage}%\nSedimentation: ${plant.sedimentationPercentage}%\nFiltration: ${plant.filtrationPercentage}%\nDisinfection: ${plant.disinfectionPercentage}%`,
      ]);

      (pdf as any).autoTable({
        head: headers,
        body: bodyData,
        startY: 30,
        theme: 'grid',
        styles: {
          cellPadding: 8,
          fontSize: 10,
          fontStyle: 'normal',
        },
        columnStyles: {
          0: { fontStyle: 'bold', minCellWidth: 80 },
          1: { cellWidth: 'wrap' },
        },
      });

      pdf.save('plant_details.pdf');
    });
  }
}
