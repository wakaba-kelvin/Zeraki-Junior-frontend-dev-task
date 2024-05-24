import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    SidebarComponent,
    TopBarComponent,
    CommonModule,
    RouterModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
