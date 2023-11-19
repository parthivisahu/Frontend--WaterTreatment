import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  routesArray : any [] = [
    {
      path:'user',
      text:'Add User',
      role: 'user'
    },
    {
      path:'user-dashboard',
      text:'User Dashboard',
      role: 'user'
    },
    {
      path:'pending-flow',
      text:'pending',
      role: 'user'
    },
    
];
  userRoutes: any [] = [];

constructor() {
  const role = localStorage.getItem('role');
  this.userRoutes = this.routesArray.filter((route: any)=> route.role == role);
}

ngOnInit(): void {
}
}
