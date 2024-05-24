import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { schoolResponse } from '../Interfaces/schools.interface';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  constructor(private http: HttpClient) {}

  getCollections() {
    return this.http.get<schoolResponse>('http://localhost:3000/Schools');
  }

  getRevenue() {
    return this.http.get<schoolResponse>('http://localhost:3000/Schools');
  }

}
