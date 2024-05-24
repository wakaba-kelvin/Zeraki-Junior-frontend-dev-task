import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Invoice } from '../../Interfaces/invoice.Interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.css'
})
export class InvoicesComponent {
  invoices: Invoice[] = [];

  constructor(private dataservice: DataService) {
    this.getInvoices();
  };

  getInvoices() {
    this.dataservice.getInvoices().subscribe(res => {
      console.log(res.Invoice);

      res.Invoice.forEach((data) => {
        this.invoices.push(data)
      })
      
    })
  }
}
