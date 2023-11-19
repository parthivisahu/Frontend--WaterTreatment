import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SupervisorInterface, UserInterface } from 'src/app/services/interfaces/role';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatDividerModule, MatMenuModule, AppRoutingModule, CommonModule],
})
export class NavbarComponent {
  user!:UserInterface;
  supervisor!:SupervisorInterface
}
