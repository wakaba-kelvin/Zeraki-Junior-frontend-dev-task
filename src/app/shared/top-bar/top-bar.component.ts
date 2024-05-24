import { Component, ElementRef, ViewChild } from '@angular/core';
import { BarprofileComponent } from './barprofile/barprofile.component';
import { BarlangComponent } from './barlang/barlang.component';
import { Icons } from '../../../assets/icons';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    CommonModule,
    BarprofileComponent,
    BarlangComponent,
    MatIconModule
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  @ViewChild('inputControlRef', { static: true }) inputControlRef: ElementRef<HTMLInputElement> | undefined;

  showInputControl = false;

  icons: any[] = Icons as any;

  ngOnInit() { }

  handleInputControlVisibility() {
    this.showInputControl = !this.showInputControl;
  }

  handleClickOutside(event: any) {
    if (
      this.inputControlRef?.nativeElement &&
      !this.inputControlRef.nativeElement.contains(event.target) &&
      event.target.className !== 'input-icon' &&
      event.target.className !== 'input-icon-img'
    ) {
      this.showInputControl = false;
    }
  }

  openSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar?.classList.add('open');
  }
}
