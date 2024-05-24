import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { schoolResponse } from '../Interfaces/schools.interface';
import { invoiceResponse } from '../Interfaces/invoice.Interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getSchools (){
    return this.http.get<schoolResponse>('http://localhost:3000/Schools')
  }

  createSchool (schoolData: schoolResponse) {
    return this.http.post<schoolResponse>('http://localhost:3000/Schools', {schoolData})
  }

  getInvoices() {
    return this.http.get<invoiceResponse>("http://localhost:3000/Invoice")
  }

  getCountries() {
    return this.http.get("https://restcountries.com/v3.1/all?fields=name,flags,languages")
  }
}
