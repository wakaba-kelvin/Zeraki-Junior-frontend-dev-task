import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SalesService } from '../../services/sales.service';

@Component({
  selector: 'app-sales',
  standalone: true,
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {
  collections: number = 0;
  signups: number = 0;
  totalRevenue: number = 0;
  bouncedCheques:number = 0;

  constructor(private salesservice: SalesService) {
    this.getCollections();
    this.getRevenue();
    this.getSignups();
   }

  getCollections(){
    this.salesservice.getCollections().subscribe(res => {
      res.Schools.forEach(school => {
        const sum =  this.collections += school.Collections
      })
    })
  }

  getRevenue() {
    this.salesservice.getRevenue().subscribe(res => {
      res.Schools.forEach(school => {
        const sum =  this.totalRevenue += school.Collections
      })
    });
  }

  getSignups() {
    this.salesservice.getCollections().subscribe(res => {
      this.signups += res.Schools.length
    })
  }
 
  // async fetchData() {
  //   try {
  //     const collectionsData = await this.http.get<any>('http://localhost:3000/Collections').toPromise();
  //     const totalCollections = collectionsData.reduce((total, collection) => total + parseInt(collection.amount), 0);
  //     this.collections = totalCollections;

  //     const signupsData = await this.http.get<any[]>('http://localhost:3000/Signups').toPromise();
  //     this.signups = signupsData.length;

  //     const invoicesData = await this.http.get<any[]>('http://localhost:3000/Invoice').toPromise();
  //     const totalRev = invoicesData.reduce((total, invoice) => total + parseInt(invoice.amountDue), 0);
  //     this.totalRevenue = totalRev;

  //     const bouncedChequesData = await this.http.get<any[]>('http://localhost:3000/BouncedCheques').toPromise();
  //     this.bouncedCheques = bouncedChequesData.length;
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }
}
