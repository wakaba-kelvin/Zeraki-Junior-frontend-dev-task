import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { Icons } from '../../../assets/icons';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  public isSidebarOpen: boolean = false;
  icons: any = Icons;

  constructor(
    private router: Router
  ) { }

  public closeSidebar(): void {
    this.isSidebarOpen = false;
  }
}
