import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { REST_COUNTRIES_API_URL } from '../../../../core/domain/contants';
import { catchError, map, of, tap } from 'rxjs';
import { Icons } from '../../../../assets/icons';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-barlang',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './barlang.component.html',
  styleUrl: './barlang.component.css'
})
export class BarlangComponent {
  @ViewChild('countryLangRef', { static: true }) countryLangRef: ElementRef | undefined;

  constructor(private dataservice: DataService) {
    this.getCountries()
  };

  getCountries(){
    this.dataservice.getCountries().subscribe(res => {
      console.log(res);
      
    });
  }

  icons: any = Icons;

  DEFAULT_COUNTRY = "United States";
  countries: any[] = [];
  loading = true;
  selectedCountry: { country: string, flag: string, language: string } | null = null;
  isDroplistEnabled = false;


  countrySelectHandler(country: string, flag: string, language: string) {
    this.selectedCountry = { country, flag, language };
    this.isDroplistEnabled = false;
  }

  handleDroplistEnable() {
    this.isDroplistEnabled = !this.isDroplistEnabled;
  }

  handleClickOutside(event: Event) {
    if (this.countryLangRef?.nativeElement && !this.countryLangRef.nativeElement.contains(event.target)) {
      this.isDroplistEnabled = false;
    }
  }

  ngAfterViewInit() {
    window.addEventListener('click', this.handleClickOutside.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('click', this.handleClickOutside.bind(this));
  }
}
